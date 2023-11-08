import { Locator, Page } from "@playwright/test";
import { BasePage as BasePage } from "./basePage";

export class QuotesPage extends BasePage {
  readonly quoteStripName: Locator;
  readonly quoteStripSymbolAndExchange: Locator;

  constructor(page: Page) {
    super(page);
    this.quoteStripName = page.locator("css=span.QuoteStrip-name");
    this.quoteStripSymbolAndExchange = page.locator(
      "css=span.QuoteStrip-symbolAndExchange"
    );
  }
}
