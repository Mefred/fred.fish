import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";

export default defineConfig({
  site: "https://fred.fish",
  output: "static",
  trailingSlash: "always",
  // Preserve HTML-aware whitespace behavior after the Astro 7 compiler upgrade.
  compressHTML: true,
  integrations: [svelte()],
  build: {
    assets: "_assets",
  },
});
