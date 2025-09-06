import { defineConfig } from "@playwright/test";

export default defineConfig({
  use: {
    headless: false,
    screenshot: "only-on-failure",
    video: "retain-on-failure"
  },
  reporter: [["list"], ["html", { open: "never" }]],
  timeout: 60000
});