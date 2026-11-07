import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { extname, join, relative, resolve, sep } from "node:path";

const output = resolve("dist");
const htmlFiles = [];

function collect(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) collect(path);
    else if (entry.isFile() && extname(entry.name).toLowerCase() === ".html") htmlFiles.push(path);
  }
}

function attributes(tag) {
  return [...tag.matchAll(/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g)]
    .map((match) => [match[1].toLowerCase(), match[2] ?? match[3] ?? match[4] ?? ""]);
}

function idsIn(html) {
  return new Set([...html.matchAll(/\b(?:id|name)\s*=\s*(?:"([^"]+)"|'([^']+)')/g)]
    .map((match) => match[1] ?? match[2]));
}

collect(output);
const failures = [];
const cache = new Map();

function resolveTarget(page, href) {
  const pageUrl = new URL(`https://fred.fish/${relative(output, page).split(sep).join("/")}`);
  const targetUrl = new URL(href, pageUrl);
  if (targetUrl.origin !== pageUrl.origin) return null;

  let pathname;
  try {
    pathname = decodeURIComponent(targetUrl.pathname);
  } catch {
    return { error: `invalid URL encoding in "${href}"` };
  }

  let target = resolve(output, `.${pathname.startsWith("/") ? pathname : `/${pathname}`}`);
  if (target !== output && !target.startsWith(output + sep)) {
    return { error: `path escapes the generated site: "${href}"` };
  }

  if (existsSync(target) && !target.endsWith(sep)) {
    // A directory route may be emitted as an index document.
    if (target.endsWith(sep)) target = join(target, "index.html");
  } else if (pathname.endsWith("/")) {
    target = join(target, "index.html");
  } else if (!extname(target)) {
    const routeIndex = join(target, "index.html");
    if (existsSync(routeIndex)) target = routeIndex;
  }

  if (!existsSync(target)) return { error: `missing local target "${href}" (resolved to ${relative(output, target)})` };
  return { target, hash: targetUrl.hash ? decodeURIComponent(targetUrl.hash.slice(1)) : "" };
}

for (const page of htmlFiles) {
  const html = readFileSync(page, "utf8");
  const tags = html.match(/<(?:a|area|link|script|img|source|iframe|form)\b[^>]*>/gi) ?? [];

  for (const tag of tags) {
    const href = attributes(tag).find(([name]) => name === "href")?.[1];
    const src = attributes(tag).find(([name]) => name === "src")?.[1];
    const reference = href ?? src;
    if (!reference || /^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(reference)) continue;

    const resolved = resolveTarget(page, reference);
    if (!resolved) continue;
    if (resolved.error) {
      failures.push(`${relative(output, page)}: ${resolved.error}`);
      continue;
    }

    if (resolved.hash && extname(resolved.target).toLowerCase() === ".html") {
      let ids = cache.get(resolved.target);
      if (!ids) {
        ids = idsIn(readFileSync(resolved.target, "utf8"));
        cache.set(resolved.target, ids);
      }
      if (!ids.has(resolved.hash)) {
        failures.push(`${relative(output, page)}: missing fragment "#${resolved.hash}" in ${relative(output, resolved.target)}`);
      }
    }
  }
}

if (failures.length) {
  console.error(`Local link validation failed with ${failures.length} issue(s):`);
  for (const failure of failures) console.error(` - ${failure}`);
  process.exitCode = 1;
} else {
  console.log(`Validated local links and fragment targets across ${htmlFiles.length} generated HTML pages.`);
}
