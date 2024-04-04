const Base = require('../base')

class LeftNavMenu extends Base {
    constructor(page) {
        super(page);

    }
    async getFirstLevelMenuItem(itemName) {
        return this.page.locator(`//button[contains(@data-testid,'level1NavButton')]//*[@class="sc-7be630a6-3 dyMECJ" and text()='${itemName}']//ancestor::button`)
    }

    async getSecondLevelMenuItem(itemName) {
        return this.page.locator(`//*[contains(@data-testid,"level2NavText") and text()='${itemName}']//ancestor::button`)
    }

    async getThirdLevelMenuItem(itemName) {
        return this.page.locator(`//*[contains(@data-testid,"level3NavText") and text()='${itemName}']//ancestor::button`)
    }

    async goToPageByLeftNavMenu(firstLevelItemName, secondLevelItemName, thirdLevelItemName){
        await (await this.getFirstLevelMenuItem(firstLevelItemName)).click();
        if(await (await this.getSecondLevelMenuItem(secondLevelItemName)).isVisible()) {
            await (await this.getSecondLevelMenuItem(secondLevelItemName)).click();
            if(await (await this.getThirdLevelMenuItem(thirdLevelItemName)).isVisible()) {
                await (await this.getThirdLevelMenuItem(thirdLevelItemName)).click();
            }
        }
    }
}

module.exports = LeftNavMenu;