Feature: Customer View

  
  Scenario Outline: Verify the customer view endpoint
    Given User prepares a GET request using the following parameters: "<BaseURL>"
    When GET request is triggered for the following EndPoint: "<EndPoint>" and path parameter "<pathCustomerID>"
    Then Status code "<StatusCode>" should be verified
    And Verify that customer details should be  "<customerID>", "<email>", "<first_name>", "<last_name>"

    Examples: 
      | BaseURL                         | EndPoint                  | pathCustomerID | customerID | email           | first_name   | last_name   | StatusCode |
      | http://localhost:4547/Blog.Api/ | {customerID}/CustomerView |           1111 |       1111 | testerA@abc.com | testerBFirst | testerBLast |        200 |
      | http://localhost:4547/Blog.Api/ | {customerID}/CustomerView |           2222 |       2222 | testerB@abc.com | testerBFirst | testerBLast |        200 |
      | http://localhost:4547/Blog.Api/ | {customerID}/CustomerView |           3333 |       3333 | testerC@abc.com | testerCFirst | testerCLast |        200 |
      | http://localhost:4547/Blog.Api/ | {customerID}/CustomerView |           4444 |       3333 | testerD@abc.com | testerDFirst | testerDLast |        200 |
      | http://localhost:4547/Blog.Api/ | {customerID}/CustomerView |           5555 |       5555 | testerE@abc.com | testerEFirst | testerELast |        200 |
      | http://localhost:4547/Blog.Api/ | {customerID}/CustomerView |           6666 |       6666 | testerF@abc.com | testerFFirst | testerFLast |        200 |

  Scenario Outline: Verify the customer view endpoint does not return as details for an invalid ID
    Given User prepares a GET request using the following parameters: "<BaseURL>"
    When GET request is triggered for the following EndPoint: "<EndPoint>" and path parameter "<customerID>"
    Then Status code "<StatusCode>" should be verified

    #And Verify that customer details should be  "<customerID>", "<email>", "<first_name>", "<last_name>"
    Examples: 
      | BaseURL                         | EndPoint                  | customerID | StatusCode |
      | http://localhost:4547/Blog.Api/ | {customerID}/CustomerView |         22 |        404 |
