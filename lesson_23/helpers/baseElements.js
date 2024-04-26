class BaseElements {
  async click(selector, selectorPosition) {
    if(selectorPosition) {
      await (await $(selector)[selectorPosition]).waitForClickable();
      await (await $(selector)[selectorPosition]).click();
    }
    await $(selector).waitForClickable();
    await $(selector).click();
  }

  async setValue(selector, text) {
    await $(selector).waitForDisplayed();
    await $(selector).setValue(text);
  }
}

module.exports = BaseElements;