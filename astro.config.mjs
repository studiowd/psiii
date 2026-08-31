import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  vite: {
    build: {
      minify: false,
      cssMinify: false,
    },
  },
});