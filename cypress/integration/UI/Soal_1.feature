Scenario: 
Given User on demo vercel website
When User choose product "Acme Circles T-Shirt"
And User add product to cart
And User checkout product
And I fill the form with data
      | field             | value             |
      | email             | guest@example.com |
      | shipping-address  | 123 Test St       |
      | city              | Test City         |
      | postal-code       | 12345             |
      | credit-card       | 4111111111111111  |
Then verify that success to checkout