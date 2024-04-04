const { test, expect } = require('@playwright/test');
const MainPage = require('../page_object/mainPage');
const Frame = require('../page_object/components/frame');
const Header = require('../page_object/components/header');
const LeftNavMenu = require('../page_object/components/leftNavMenu');


test.describe.skip('BBC test', async function () {
    let mainPage;
    let frame;
    let header;
    let leftNaveMenu;

    test.beforeEach(async ({page, context}) => {
        mainPage = new MainPage(page);
        frame = new Frame(page);
        header = new Header(page);
        leftNaveMenu = new LeftNavMenu(page);
    });

    test('should go to africa page', async ({page}) => {
        await mainPage.navigate('https://www.bbc.com/');
        await frame.acceptCookies();
        await header.openLeftNavMenu();
        await leftNaveMenu.goToPageByLeftNavMenu('News', 'World', 'Africa');
        await page.waitForTimeout(4000)
        await expect(await page.url()).toContain('/africa');
    });

    test('should go to africa page page 2', async ({page}) => {
        await mainPage.navigate('https://www.bbc.com/');
        await frame.acceptCookies();
        await header.openLeftNavMenu();
        await leftNaveMenu.goToPageByLeftNavMenu('News', 'World', 'Africa');
        await page.waitForTimeout(4000)
        await expect(await page.url()).toContain('/africa');
    });
})