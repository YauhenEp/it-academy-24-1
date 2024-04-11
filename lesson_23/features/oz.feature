Feature: OZ .by training tests
  As a user I ...

  Scenario: Search words should be in search results titles
    Given I navigate to "oz.by"
    When I search text "Песнь льда и пламени" in search field
    Then I should see text "A Song of Ice and Fire" in element ".digi-product__label" 0 number

