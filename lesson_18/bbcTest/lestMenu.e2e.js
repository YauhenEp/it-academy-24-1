const header = require('../bbcPageObject/components/header');
const leftNavMenu = require('../bbcPageObject/components/leftNavMenu')
const mainPage = require("../bbcPageObject/mainPage");

describe('BBc e2e tests', () => {
    it('should go to translator page ny suggestion icon', async () => {
        await mainPage.navigate('https://www.bbc.com/');
        await mainPage.acceptCookies();
        await header.openLeftNavMenu();
        await leftNavMenu.goToPageByLeftNavMenu('Earth', 'Natural Wonders');
        expect(await mainPage.earthTitle.getText()).toEqual('Natural Wonders');
    })
});