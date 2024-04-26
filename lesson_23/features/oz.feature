Feature: OZ .by training tests
  As a user I ...

  @smoke
  Scenario: Search words should be in search results titles
    Given I navigate to "oz.by"
    When I search text "Песнь льда и пламени" in search field
    Then I should see text "A Song of Ice and Fire" in element "Home Page > Product Label" 0 number

  Scenario Outline: Validate <website> title
    Given I navigate to "<website>"
    Then I should see title "<title>"

    Examples:
      | website               | title                                                                                          |
      | https://cucumber.io   | BDD Testing & Collaboration Tools for Teams \| Cucumber                                        |
      | https://webdriver.io/ | WebdriverIO · Next-gen browser and mobile automation test framework for Node.js \| WebdriverIO |
