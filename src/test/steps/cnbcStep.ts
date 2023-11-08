import {
  DataTable,
  Given,
  Then,
  When,
  Before,
  After,
} from "@cucumber/cucumber";
import { Browser, Page, chromium, expect } from "@playwright/test";
import { WorldPage } from "../../../pages/worldPage";
import { QuotesPage } from "../../../pages/quotesPage";
import { page, worldPage, quotesPage } from "../hooks/hooks";

Given("User navigates to CNBC website", { timeout: 60000 }, async function () {
  await page.goto("https://www.cnbc.com/");
});

Then("The current page should be {string}", async function (pageTitle: string) {
  expect(page.url()).toContain(pageTitle.toLowerCase());
});

Then(
  "Markets banner menu items has the following",
  async function (dataTable: DataTable) {
    let names = dataTable.hashes().map((x) => x["name"]);

    await expect(worldPage.marketsBannerMenuItems).toHaveText(names);
  }
);

When(
  "User clicks markets banner menu item {string}",
  async function (text: string) {
    await worldPage.marketsBannerMenuItems
      .and(page.getByText("ASIA FX"))
      .click();
  }
);

Then(
  "The market card symbols should have {int} items",
  async function (count: number) {
    await expect(worldPage.marketCardSymbolItems).toHaveCount(count);
  }
);

Then(
  "The market card symbols should contain text {string}",
  async function (text: string) {
    await expect(worldPage.marketCardSymbolItems).toContainText([text]);
  }
);

When("User clicks Search quotes, news & videos button", async function () {
  await worldPage.searchToggleButton.click();
});

When(
  "User types {string} in search quotes, news & videos textbox",
  async function (text: string) {
    await worldPage.searchEntrySearchFormInput.fill(text);
  }
);

Then(
  "The suggested symbols should have {int} results",
  async function (count: number) {
    await expect(worldPage.symbolResultItems).toHaveCount(count);
  }
);

Then(
  "The suggested symbols should contain text {string}",
  async function (text: string) {
    await expect(worldPage.symbolResultItems).toContainText([text]);
  }
);

When(
  "User clicks the first result of the suggested symbols",
  async function () {
    await worldPage.symbolResultItems.first().click();
  }
);

Then("The quote name should be {string}", async function (text: string) {
  await expect(quotesPage.quoteStripName).toHaveText(text);
});

Then(
  "The quote symbol and exchange should be {string}",
  async function (text: string) {
    await expect(quotesPage.quoteStripSymbolAndExchange).toHaveText(text);
  }
);
