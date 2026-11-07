import { defineConfig } from "astro/config";
export default defineConfig({
  site: "https://fred.fish",
  output: "static",
  trailingSlash: "always",
  // Preserve HTML-aware whitespace behavior after the Astro 7 compiler upgrade.
  compressHTML: true,
  build: {
    assets: "_assets",
  },
});
