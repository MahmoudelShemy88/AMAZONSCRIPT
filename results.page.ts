import { Page } from "@playwright/test";

export class ResultsPage {
  constructor(private page: Page) {}

  async sortHighToLow() {
   
    await this.page.locator("select#s-result-sort-select").selectOption("price-desc-rank");
  }

  async openFirstResult() {
    const first = this.page.locator("h2 a").first();
    await first.click();
  }
}
