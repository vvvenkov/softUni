import { chromium } from "playwright-chromium";
import { expect } from "chai";

const homeUrl = "http://localhost:3000";
let browser, page;

before(async () => { browser = await chromium.launch({ headless: false, slowMo: 10, timeout: 10000 }); });
beforeEach(async () => { page = await browser.newPage(); });
afterEach(async () => { await page.close(); });
after(async () => { await browser.close(); });

describe("Home Page", async () => {
    it("should load the home page", async () => {
        await page.goto(homeUrl);

        const isVisible = await page.isVisible("#home-section");
        expect(isVisible).to.be.true;
    });

    it("should make a screenshot of the home page", async () => {
        await page.goto(homeUrl);
        await page.screenshot({ path: `example.png` });
    });
});

describe("Catalog Page", async () => {

    it("should load details page", async () => {
        await page.goto(homeUrl);

        await page.click("a[href='/catalog']");
        await page.click(".preview");
        await page.waitForLoadState();

        expect(await page.isVisible("div.ingredients")).to.be.true;
        await page.screenshot({ path: `example.png` });
  
    });

    it("should load catalog page", async () => {
        await page.goto(homeUrl);

        await page.click("a[href*=catalog]");
        await page.waitForLoadState();

        expect(await page.isVisible("#catalog-section"));
    })
});