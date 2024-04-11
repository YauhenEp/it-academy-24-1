const Base = require('./base')

class SearchResultsPage extends Base {
    get productTitles() {
        return cy.get('.digi-product__label')
    }
}

module.exports = new SearchResultsPage();