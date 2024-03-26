const { Builder, By, until } = require('selenium-webdriver');

(async function () {
    const driver = new Builder().forBrowser('chrome').build();

    await driver.get('https://www.onliner.by/');
    const enterButton = await driver.findElement(By.css('.auth-bar__item.auth-bar__item--text'));
    await enterButton.click();
    const loginField = await driver.findElement(By.css('[placeholder="Ник или e-mail"]'))
    await loginField.sendKeys('Login Name');
    const passwordField = await driver.findElement(By.css('[placeholder="Пароль"]'))
    await passwordField.sendKeys('Password')
    const loginButton = await driver.findElement(By.css('.auth-button_primary'))
    await loginButton.click();
    await driver.wait(until.elementLocated(By.css('.auth-form__description_error')));
    const errorMessage = await driver.findElement(By.css('.auth-form__description_error'))
    console.log(await errorMessage.getText());

    await driver.quit();
})();