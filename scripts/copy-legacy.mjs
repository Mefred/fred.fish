import { cp, access } from "node:fs/promises";
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
