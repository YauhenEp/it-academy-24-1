const Base = require('../base')

class LeftNavMenu extends Base {
    async getFirstLevelMenuItem(itemName) {
        return $(`//button[contains(@data-testid,'level1NavButton')]//*[@class="sc-7be630a6-3 dyMECJ" and text()='${itemName}']//ancestor::button`)
    }

    async getSecondLevelMenuItem(itemName) {
        return $(`//*[contains(@data-testid,"level2NavText") and text()='${itemName}']//ancestor::button`)
    }

    async getThirdLevelMenuItem(itemName) {
        return $(`//*[contains(@data-testid,"level3NavText") and text()='${itemName}']//ancestor::button`)
    }

    async goToPageByLeftNavMenu(firstLevelItemName, secondLevelItemName, thirdLevelItemName){
        await (await this.getFirstLevelMenuItem(firstLevelItemName)).waitForDisplayed();
        await (await this.getFirstLevelMenuItem(firstLevelItemName)).click();
        if(await (await this.getSecondLevelMenuItem(secondLevelItemName)).isDisplayed()) {
            await (await this.getSecondLevelMenuItem(secondLevelItemName)).waitForDisplayed();
            await (await this.getSecondLevelMenuItem(secondLevelItemName)).click();
            if(await (await this.getThirdLevelMenuItem(thirdLevelItemName)).isDisplayed()) {
                await (await this.getThirdLevelMenuItem(thirdLevelItemName)).waitForDisplayed();
                await (await this.getThirdLevelMenuItem(thirdLevelItemName)).click();
            }
        }
    }
}

module.exports = new LeftNavMenu();