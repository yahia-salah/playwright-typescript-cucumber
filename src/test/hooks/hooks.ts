import { After, Before } from "@cucumber/cucumber";
import { Browser, Page, chromium } from "@playwright/test";
import { QuotesPage } from "../../../pages/quotesPage";
import { WorldPage } from "../../../pages/worldPage";

let browser: Browser;
export let page: Page;
export let worldPage: WorldPage;
export let quotesPage: QuotesPage;

Before(async function () {
    browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    page = await context.newPage();
    worldPage = new WorldPage(page);
    quotesPage = new QuotesPage(page);
  });
  
  After(async function () {
    await browser.close();
  });
  