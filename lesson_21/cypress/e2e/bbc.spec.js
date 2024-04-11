const mainPage = require('../../page_object/mainPage');
const search = require('../../page_object/components/search');
const searchResultsPage = require('../../page_object/searchResultsPage');
const mainMenu = require('../../page_object/components/mainMenu');
const { TEXT } = require('../../helpers/constants');

describe('bbc', () => {
    it.skip('go to africa page', () => {
        mainPage.navigate('https://oz.by/');
        search.searchAllResults(TEXT.BOOK_TEXT);
        cy.validateElementsText(searchResultsPage.productTitles, TEXT.BOOK_TEXT);

    })

    it.skip('search by categories', () => {
        mainPage.navigate('https://oz.by/');
        search.searchByCategories(TEXT.BOOK_TEXT, 1);
        cy.validateElementsText(searchResultsPage.productTitles, TEXT.BOOK_TEXT);
    })

    it('filter', () => {
        mainPage.navigate('https://oz.by/');
        mainMenu.goToCataloguePage();

    })
})