import { Page, expect } from "@playwright/test";

export class CartPage {
  constructor(private page: Page) {}

  async navigateToCart() {
    await this.page.click("#nav-cart");
  }

  async assertCartDetails(expectedName: string, expectedPrice: string) {
    const cartName = await this.page.locator(".sc-product-title").innerText();
    const cartPrice = await this.page.locator(".sc-price").first().innerText();

    expect(cartName).toContain(expectedName.split(" ")[0]); // partial match
    expect(cartPrice).toBe(expectedPrice);
  }
}
