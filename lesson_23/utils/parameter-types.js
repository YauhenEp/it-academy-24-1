const { defineParameterType } = require('@wdio/cucumber-framework');
const PageFactory = require('../pageobjects/pageFactory');
const Utils = require('./utils');

defineParameterType({
  regexp: /"([^"\\]*(\\.[^"\\]*)*)"/,
  name: 'locator',
  transformer: (string) => {
    if(string.indexOf(' > ') !== -1) {
      const array = string.split(' > ');
      return Utils.poParser(array, PageFactory);
    }
    return string;
  }
})

defineParameterType({
  regexp: /| \d number/,
  name: 'locator position',
  transformer: (position) => {
    return position;
  }
})