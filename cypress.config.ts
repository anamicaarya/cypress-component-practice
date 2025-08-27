import { defineConfig } from "cypress";

export default defineConfig({
  video: false,
  e2e: {},
  component: {
    devServer: {
      framework: "react",
      bundler: "vite"
    },
    specPattern: "src/**/*.cy.{ts,tsx}",
    supportFile: "cypress/support/component-index.ts",
    indexHtmlFile: "cypress/support/component-index.html"
  }
});
