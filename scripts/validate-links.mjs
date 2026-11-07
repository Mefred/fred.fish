import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { extname, join, relative, resolve, sep } from "node:path";

const output = resolve("dist");
if (!existsSync(output) || !statSync(output).isDirectory()) {
  console.error("Generated site not found. Run the production build before link validation.");
  process.exit(1);
}

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
  return new Set([...html.matchAll(/\b(?:id|name)\s*=\s*(?:"([^"]+)"|'([^']+)'|([^\s>]+))/g)]
    .map((match) => match[1] ?? match[2] ?? match[3]));
}

collect(output);
const failures = [];
const idCache = new Map();

function resolveTarget(page, reference) {
  let targetUrl;
  try {
    const pagePath = relative(output, page).split(sep).join("/");
    targetUrl = new URL(reference, `https://fred.fish/${pagePath}`);
  } catch {
    return { error: `invalid URL "${reference}"` };
  }

  if (targetUrl.origin !== "https://fred.fish") return null;

  let pathname;
  let hash;
  try {
    pathname = decodeURIComponent(targetUrl.pathname);
    hash = decodeURIComponent(targetUrl.hash.slice(1));
  } catch {
    return { error: `invalid URL encoding in "${reference}"` };
  }

  let target = resolve(output, `.${pathname.startsWith("/") ? pathname : `/${pathname}`}`);
  const fromOutput = relative(output, target);
  if (fromOutput === ".." || fromOutput.startsWith(`..${sep}`) || resolve(target) !== output && !target.startsWith(output + sep)) {
    return { error: `path escapes the generated site: "${reference}"` };
  }

  if (existsSync(target) && statSync(target).isDirectory()) {
    target = join(target, "index.html");
  } else if (!existsSync(target) && !extname(target)) {
    const routeIndex = join(target, "index.html");
    if (existsSync(routeIndex)) target = routeIndex;
  }

  if (!existsSync(target) || !statSync(target).isFile()) {
    return { error: `missing local target "${reference}" (resolved to ${relative(output, target)})` };
  }

  return { target, hash };
}

const referenceAttributes = ["href", "src", "action", "poster", "data"];
for (const page of htmlFiles) {
  const html = readFileSync(page, "utf8");
  const tags = html.match(/<(?:a|area|link|script|img|source|iframe|form|video|audio|track|object|embed)\b[^>]*>/gi) ?? [];

  for (const tag of tags) {
    const attrs = attributes(tag);
    const reference = referenceAttributes
      .map((name) => attrs.find(([attribute]) => attribute === name)?.[1])
      .find((value) => value !== undefined && value !== "");
    if (!reference || /^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(reference)) continue;

    const resolved = resolveTarget(page, reference);
    if (!resolved) continue;
    if (resolved.error) {
      failures.push(`${relative(output, page)}: ${resolved.error}`);
      continue;
    }

    if (resolved.hash && extname(resolved.target).toLowerCase() === ".html") {
      let ids = idCache.get(resolved.target);
      if (!ids) {
        ids = idsIn(readFileSync(resolved.target, "utf8"));
        idCache.set(resolved.target, ids);
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
