import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class WorldPage extends BasePage {
  readonly marketsBannerMenuItems: Locator;
  readonly marketCardSymbolItems: Locator;
  readonly searchToggleButton: Locator;
  readonly searchEntrySearchFormInput: Locator;
  readonly symbolResultItems: Locator;

  constructor(page: Page) {
    super(page);
    this.marketsBannerMenuItems = page.locator(
      "css=button.MarketsBannerMenu-marketOption"
    );
    this.marketCardSymbolItems = page.locator("css=span.MarketCard-symbol");
    this.searchToggleButton = page.locator("css=button.SearchToggle-button");
    this.searchEntrySearchFormInput = page.locator(
      "xpath=//form[@id='SearchEntry-searchForm']/input[@type='search']"
    );
    this.symbolResultItems = page.locator("css=span.SymbolResultItem-symbol");
  }
}
