import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.radford.edu/~mhtay/CPSC120/VIM_Editor_Commands.htm');
  await page.screenshot({ path: 'vim_command.png' });

  await browser.close();
})();
