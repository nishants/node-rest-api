Feature: Health Check
  Should be able to set value to store
  and get value from store


  Scenario: Set and get values from store
    Given I set value of "message" as "hello world" in values
    And I save values to store
    Then I should get correct values from store for "message"
