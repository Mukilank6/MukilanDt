Feature: Ecommerce validations

Scenario: Searching and placing the order
Given User logins with "harry12@gmail.com" and "Password1"
When User add "ADIDAS ORIGINAL" to cart
And User enter valid information and place the order
Then Verify the order in order history page
