const Base = require('../base')

class MainMenu extends Base {
    get booksItem() {
        return cy.get(`.main-nav__list__li_wnav [href='/books/']`)
    }

    get foreignBooksItem() {
        return cy.get('.main-nav__list__li_wnav [href="/books/topic1602.html"]')
    }

    goToCataloguePage() {
        this.booksItem.trigger('mouseover');
        this.foreignBooksItem.click();
    }
}

module.exports = new MainMenu();