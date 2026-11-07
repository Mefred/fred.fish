import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";

export default defineConfig({
  site: "https://fred.fish",
  output: "static",
  trailingSlash: "always",
  integrations: [svelte()],
  build: {
    assets: "_assets",
  },
});
