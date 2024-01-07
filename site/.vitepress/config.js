import { defineConfig } from "vitepress"

export default defineConfig({
  title: "Chromatone Slides",
  outDir: '../dist/',
  transformHead({ pageData }) {
    return [
      process.env.NODE_ENV === "production" ? ["script", { async: true, defer: true, "data-website-id": "dca0c081-246d-4326-a760-aeb9eeb44914", src: "https://stats.chromatone.center/script.js" }] : null,
    ]
  }
})