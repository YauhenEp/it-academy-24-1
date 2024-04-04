const homePage = require('../pageobjects/homePage')
const popup = require('../pageobjects/components/popup')

describe('Yandex e2e tests', () => {
    it.skip('should go to translator page ny suggestion icon', async () => {
        await homePage.navigate('https://yandex.by/');
        await popup.closePopup();
        await homePage.acceptAllCookies();
        await homePage.gotoTranslatorPage(homePage.geolocationLink);
        await homePage.switchTabByNumber(1)
        expect(await browser.getUrl()).toContain('translate.')
    })

    it.skip('should go to translator page ny suggestion icon', async () => {
        await homePage.navigate('https://yandex.by/');
        await popup.closePopup();
        await homePage.acceptAllCookies();
        await homePage.gotoSuggestItemByNumber(5);
        await homePage.switchTabByNumber(1)
        expect(await browser.getTitle()).toContain('песни, альбомы, плейлисты')
    })

    it('should go to translator page ny suggestion icon', async () => {
        await homePage.navigate('https://yandex.by/');
        await popup.closePopup();
        await homePage.acceptAllCookies();
        await homePage.gotoSuggestItemByName("Карты");
        await homePage.switchTabByNumber(1)
        expect(await browser.getTitle()).toEqual('Яндекс Карты — транспорт, навигация, поиск мест')
    })
});