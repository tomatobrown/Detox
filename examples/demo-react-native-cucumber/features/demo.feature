Feature: Demo Test

  Scenario: App Is Used
    When I tap element by text 'Say Hello'
    Then text 'Hello!!!' is visible
