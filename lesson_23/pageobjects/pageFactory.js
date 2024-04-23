const HomePage = require('./homePage');

class PageFactory {
  static 'Home Page' = new HomePage();
}

module.exports = PageFactory;