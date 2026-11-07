import { cp, access } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const output = resolve(root, "dist");
for (const directory of ["cisco", "reef", "assets"]) {
  const source = resolve(root, directory);
  try {
    await access(source);
    await cp(source, resolve(output, directory), { recursive: true, force: true });
    console.log(`Preserved legacy route/assets: /${directory}/`);
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
}
