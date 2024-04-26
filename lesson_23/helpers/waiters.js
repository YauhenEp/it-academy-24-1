async function waitForChangeText(selector, expectedText, timeout = 10000) {
  return browser.waitUntil(() => {
    return $(selector).getText() === expectedText;
  }, {
    timeout: timeout,
    timeoutMsg: `Text in webelement with selector ${selector} does equal ${expectedText}, text is ${await $(selector).getText()}`
  })
}