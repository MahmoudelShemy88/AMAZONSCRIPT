import { Page } from "@playwright/test";

export class ProductPage {
  constructor(private page: Page) {}

  async getProductDetails() {
    const title = await this.page.locator("#productTitle").innerText();
    const price = await this.page.locator(".a-price .a-offscreen").first().innerText();
    return { title: title.trim(), price: price.trim() };
  }

  async addToCart() {
    await this.page.click("#add-to-cart-button");
    await this.page.waitForTimeout(2000); // wait for cart update
  }
}
