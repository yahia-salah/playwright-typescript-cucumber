Feature: CNBC Smoke Tests

  Background: User is on CNBC world page
    Given User navigates to CNBC website
    Then The current page should be "World"

  Scenario: Markets banner menu items has EUR,ASIA,ASIA FX,PRE-MKT,BONDS,OIL,GOLD,CRYPTO,US,EUR FX
    Then Markets banner menu items has the following
      | name    |
      | EUR     |
      | ASIA    |
      | ASIA FX |
      | PRE-MKT |
      | BONDS   |
      | OIL     |
      | GOLD    |
      | CRYPTO  |
      | US      |
      | EUR FX  |

  Scenario: Clicking markets banner menu item "ASIA FX" should show market card symbol "USD/JPY
    When User clicks markets banner menu item "ASIA FX"
    Then The market card symbols should have 5 items
    And The market card symbols should contain text "USD/JPY"

  Scenario: Searching for stock "IBM"
    When User clicks Search quotes, news & videos button
    And User types "IBM" in search quotes, news & videos textbox
    Then The suggested symbols should have 5 results
    And The suggested symbols should contain text "IBM"
    When User clicks the first result of the suggested symbols
    Then The current page should be "Quotes"
    And The quote name should be "International Business Machines Corp"
    And The quote symbol and exchange should be "IBM:NYSE"
