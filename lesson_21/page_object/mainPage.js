const Base = require('./base')

class MainPage extends Base {
    get sliderButtons() {
        return cy.get('a.offers-slider__pagination__item')
    }



}

module.exports = new MainPage();