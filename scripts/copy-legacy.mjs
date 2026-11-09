import { cp, access, readdir, readFile, writeFile } from "node:fs/promises";
import { resolve, sep } from "node:path";

const root = process.cwd();
const output = resolve(root, "dist");
const legacyCiscoLabs = resolve(root, "cisco", "labs");

for (const directory of ["cisco", "reef", "assets"]) {
  const source = resolve(root, directory);

  try {
    await access(source);

    // Preserve unmigrated legacy files without replacing Astro-generated routes.
    await cp(source, resolve(output, directory), {
      recursive: true,
      force: false,
      errorOnExist: false,
      // Labs are temporarily unpublished. Exclude the directory itself and
      // every descendant while leaving the source files available for later.
      filter: (entry) =>
        directory !== "cisco" ||
        (entry !== legacyCiscoLabs && !entry.startsWith(legacyCiscoLabs + sep)),
    });

    console.log(`Preserved legacy route/assets where no migrated page exists: /${directory}/`);
  } catch (error) {
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      error.code !== "ENOENT"
    ) {
      throw error;
    }
  }
}


async function improveLegacyAccessibility(directory) {
  let entries;
  try {
    entries = await readdir(directory, { withFileTypes: true });
  } catch (error) {
    if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") return;
    throw error;
  }

  for (const entry of entries) {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) {
      await improveLegacyAccessibility(path);
      continue;
    }
    if (!entry.isFile() || !entry.name.endsWith(".html")) continue;

    let html = await readFile(path, "utf8");
    html = html.replace(
      /<aside class="sidebar" id="sidebar"(?![^>]*aria-label)/g,
      '<aside class="sidebar" id="sidebar" aria-label="Workspace sidebar"',
    );
    html = html.replace(
      /<div class="lesson-table-wrap"(?![^>]*tabindex)/g,
      '<div class="lesson-table-wrap" tabindex="0"',
    );
    html = html.replace(
      /<div class="media-table-wrap"(?![^>]*tabindex)/g,
      '<div class="media-table-wrap" tabindex="0"',
    );
    html = html.replace(/<pre(?![^>]*tabindex)([^>]*)>/g, '<pre$1 tabindex="0">');
    await writeFile(path, html);
  }
}

for (const directory of ["cisco/learning/modules", "reef"]) {
  await improveLegacyAccessibility(resolve(output, directory));
}
