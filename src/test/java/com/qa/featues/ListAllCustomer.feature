Feature: Validate List All Customers

  
  Scenario Outline: Verify the customers endpoint
    Given User prepares a GET request using the following parameters: "<BaseURL>"
    When GET request is triggered for the following EndPoint: "<EndPoint>"
    Then Status code "<StatusCode>" should be verified
    And Verify that the number of customer records in the response is "<CustomerCount>"

    Examples: 
      | BaseURL                         | EndPoint  | StatusCode | CustomerCount |
      | http://localhost:4547/Blog.Api/ | Customers |        404 |             6 |


  Scenario Outline: Verify the customer IDs in the customers endpoint
    Given User prepares a GET request using the following parameters: "<BaseURL>"
    When GET request is triggered for the following EndPoint: "<EndPoint>"
    Then Status code "<StatusCode>" should be verified
    And Verify that the displayed customer IDs are" <CustomerIDs>"

    Examples: 
      | BaseURL                         | EndPoint  | StatusCode | CustomerIDs                   |
      | http://localhost:4547/Blog.Api/ | Customers |        404 | 1111,2222,3333,4444,5555,6666 |