const { chromium } = require('playwright');

describe('Downloads Page', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await chromium.launch();
  });

  afterAll(async () => {
    await browser.close();
  });

  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto('http://localhost:3000/downloads'); // Replace with the URL of your downloads page
  });

  afterEach(async () => {
    await page.close();
  });

  it('should display the correct number of buttons', async () => {
    const buttonsCount = await page.$$eval('.button', (elements) => elements.length);
    expect(buttonsCount).toBe(8); // Adjust the expected count based on the number of buttons in the grids
  });

  it('should navigate to the correct link when a button is clicked', async () => {
    const [firstButton] = await page.$$('.button');
    await firstButton.click();
    await page.waitForNavigation();

    const currentUrl = page.url();
    expect(currentUrl).toBe('#'); // Adjust the expected URL based on the link of the first button
  });

  // Add more tests as needed...
});
