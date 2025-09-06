import { test } from "@playwright/test";
import { HomePage } from "../pages/home.page";
import { ResultsPage } from "../pages/results.page";
import { ProductPage } from "../pages/product.page";
import { CartPage } from "../pages/cart.page";

test("Amazon Egypt - iPad Search & Add to Cart", async ({ page }) => {
  const home = new HomePage(page);
  const results = new ResultsPage(page);
  const product = new ProductPage(page);
  const cart = new CartPage(page);

  await home.navigate();
  await home.searchProduct("iPad");

  await results.sortHighToLow();
  await results.openFirstResult();

  const { title, price } = await product.getProductDetails();

  await product.addToCart();

  await cart.navigateToCart();
  await cart.assertCartDetails(title, price);
});
