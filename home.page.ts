import { Page } from "@playwright/test";

export class HomePage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto("https://www.amazon.eg/");
  }

  async searchProduct(productName: string) {
    await this.page.fill("#twotabsearchtextbox", productName);
    await this.page.click("input.nav-input[type='submit']");
  }
}
