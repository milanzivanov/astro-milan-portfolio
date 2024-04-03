import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://milanzivanov.github.io",
  redirects: {
    "/": "",
    "/work/": "work",
    "/about/": " about"
  }
});
