const Base = require('./base')

class HomePage extends Base {
    get "Product Label"() {
        return '.digi-product__label';
    }
}

module.exports = HomePage;