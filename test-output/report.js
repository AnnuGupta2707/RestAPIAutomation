$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CustomerView.feature");
formatter.feature({
  "line": 1,
  "name": "Customer View",
  "description": "",
  "id": "customer-view",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify the customer view endpoint",
  "description": "",
  "id": "customer-view;verify-the-customer-view-endpoint",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User prepares a GET request using the following parameters: \"\u003cBaseURL\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "GET request is triggered for the following EndPoint: \"\u003cEndPoint\u003e\" and path parameter \"\u003cpathCustomerID\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Status code \"\u003cStatusCode\u003e\" should be verified",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Verify that customer details should be  \"\u003ccustomerID\u003e\", \"\u003cemail\u003e\", \"\u003cfirst_name\u003e\", \"\u003clast_name\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "customer-view;verify-the-customer-view-endpoint;",
  "rows": [
    {
      "cells": [
        "BaseURL",
        "EndPoint",
        "pathCustomerID",
        "customerID",
        "email",
        "first_name",
        "last_name",
        "StatusCode"
      ],
      "line": 11,
      "id": "customer-view;verify-the-customer-view-endpoint;;1"
    },
    {
      "cells": [
        "http://localhost:4547/Blog.Api/",
        "{customerID}/CustomerView",
        "1111",
        "1111",
        "testerA@abc.com",
        "testerBFirst",
        "testerBLast",
        "200"
      ],
      "line": 12,
      "id": "customer-view;verify-the-customer-view-endpoint;;2"
    },
    {
      "cells": [
        "http://localhost:4547/Blog.Api/",
        "{customerID}/CustomerView",
        "2222",
        "2222",
        "testerB@abc.com",
        "testerBFirst",
        "testerBLast",
        "200"
      ],
      "line": 13,
      "id": "customer-view;verify-the-customer-view-endpoint;;3"
    },
    {
      "cells": [
        "http://localhost:4547/Blog.Api/",
        "{customerID}/CustomerView",
        "3333",
        "3333",
        "testerC@abc.com",
        "testerCFirst",
        "testerCLast",
        "200"
      ],
      "line": 14,
      "id": "customer-view;verify-the-customer-view-endpoint;;4"
    },
    {
      "cells": [
        "http://localhost:4547/Blog.Api/",
        "{customerID}/CustomerView",
        "4444",
        "3333",
        "testerD@abc.com",
        "testerDFirst",
        "testerDLast",
        "200"
      ],
      "line": 15,
      "id": "customer-view;verify-the-customer-view-endpoint;;5"
    },
    {
      "cells": [
        "http://localhost:4547/Blog.Api/",
        "{customerID}/CustomerView",
        "5555",
        "5555",
        "testerE@abc.com",
        "testerEFirst",
        "testerELast",
        "200"
      ],
      "line": 16,
      "id": "customer-view;verify-the-customer-view-endpoint;;6"
    },
    {
      "cells": [
        "http://localhost:4547/Blog.Api/",
        "{customerID}/CustomerView",
        "6666",
        "6666",
        "testerF@abc.com",
        "testerFFirst",
        "testerFLast",
        "200"
      ],
      "line": 17,
      "id": "customer-view;verify-the-customer-view-endpoint;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Verify the customer view endpoint",
  "description": "",
  "id": "customer-view;verify-the-customer-view-endpoint;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User prepares a GET request using the following parameters: \"http://localhost:4547/Blog.Api/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "GET request is triggered for the following EndPoint: \"{customerID}/CustomerView\" and path parameter \"1111\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Status code \"200\" should be verified",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Verify that customer details should be  \"1111\", \"testerA@abc.com\", \"testerBFirst\", \"testerBLast\"",
  "matchedColumns": [
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:4547/Blog.Api/",
      "offset": 61
    }
  ],
  "location": "CommonStepDefinitions.user_prepares_a_GET_request_using_the_following_parameters(String)"
});
formatter.result({
  "duration": 432698800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "{customerID}/CustomerView",
      "offset": 54
    },
    {
      "val": "1111",
      "offset": 101
    }
  ],
  "location": "CommonStepDefinitions.get_request_is_triggered_for_the_following_EndPoint_and_path_parameter(String,String)"
});
formatter.result({
  "duration": 1150297800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 13
    }
  ],
  "location": "CommonStepDefinitions.status_code_should_be_verified(int)"
});
formatter.result({
  "duration": 11855400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1111",
      "offset": 41
    },
    {
      "val": "testerA@abc.com",
      "offset": 49
    },
    {
      "val": "testerBFirst",
      "offset": 68
    },
    {
      "val": "testerBLast",
      "offset": 84
    }
  ],
  "location": "CommonStepDefinitions.verify_that_customer_details_should_be(String,String,String,String)"
});
formatter.result({
  "duration": 4724487700,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verify the customer view endpoint",
  "description": "",
  "id": "customer-view;verify-the-customer-view-endpoint;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User prepares a GET request using the following parameters: \"http://localhost:4547/Blog.Api/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "GET request is triggered for the following EndPoint: \"{customerID}/CustomerView\" and path parameter \"2222\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Status code \"200\" should be verified",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Verify that customer details should be  \"2222\", \"testerB@abc.com\", \"testerBFirst\", \"testerBLast\"",
  "matchedColumns": [
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:4547/Blog.Api/",
      "offset": 61
    }
  ],
  "location": "CommonStepDefinitions.user_prepares_a_GET_request_using_the_following_parameters(String)"
});
formatter.result({
  "duration": 413700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "{customerID}/CustomerView",
      "offset": 54
    },
    {
      "val": "2222",
      "offset": 101
    }
  ],
  "location": "CommonStepDefinitions.get_request_is_triggered_for_the_following_EndPoint_and_path_parameter(String,String)"
});
formatter.result({
  "duration": 164167500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 13
    }
  ],
  "location": "CommonStepDefinitions.status_code_should_be_verified(int)"
});
formatter.result({
  "duration": 1479700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2222",
      "offset": 41
    },
    {
      "val": "testerB@abc.com",
      "offset": 49
    },
    {
      "val": "testerBFirst",
      "offset": 68
    },
    {
      "val": "testerBLast",
      "offset": 84
    }
  ],
  "location": "CommonStepDefinitions.verify_that_customer_details_should_be(String,String,String,String)"
});
formatter.result({
  "duration": 68256100,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify the customer view endpoint",
  "description": "",
  "id": "customer-view;verify-the-customer-view-endpoint;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User prepares a GET request using the following parameters: \"http://localhost:4547/Blog.Api/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "GET request is triggered for the following EndPoint: \"{customerID}/CustomerView\" and path parameter \"3333\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Status code \"200\" should be verified",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Verify that customer details should be  \"3333\", \"testerC@abc.com\", \"testerCFirst\", \"testerCLast\"",
  "matchedColumns": [
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:4547/Blog.Api/",
      "offset": 61
    }
  ],
  "location": "CommonStepDefinitions.user_prepares_a_GET_request_using_the_following_parameters(String)"
});
formatter.result({
  "duration": 66300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "{customerID}/CustomerView",
      "offset": 54
    },
    {
      "val": "3333",
      "offset": 101
    }
  ],
  "location": "CommonStepDefinitions.get_request_is_triggered_for_the_following_EndPoint_and_path_parameter(String,String)"
});
formatter.result({
  "duration": 17688300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 13
    }
  ],
  "location": "CommonStepDefinitions.status_code_should_be_verified(int)"
});
formatter.result({
  "duration": 216200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3333",
      "offset": 41
    },
    {
      "val": "testerC@abc.com",
      "offset": 49
    },
    {
      "val": "testerCFirst",
      "offset": 68
    },
    {
      "val": "testerCLast",
      "offset": 84
    }
  ],
  "location": "CommonStepDefinitions.verify_that_customer_details_should_be(String,String,String,String)"
});
formatter.result({
  "duration": 21306800,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify the customer view endpoint",
  "description": "",
  "id": "customer-view;verify-the-customer-view-endpoint;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User prepares a GET request using the following parameters: \"http://localhost:4547/Blog.Api/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "GET request is triggered for the following EndPoint: \"{customerID}/CustomerView\" and path parameter \"4444\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Status code \"200\" should be verified",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Verify that customer details should be  \"3333\", \"testerD@abc.com\", \"testerDFirst\", \"testerDLast\"",
  "matchedColumns": [
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:4547/Blog.Api/",
      "offset": 61
    }
  ],
  "location": "CommonStepDefinitions.user_prepares_a_GET_request_using_the_following_parameters(String)"
});
formatter.result({
  "duration": 67500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "{customerID}/CustomerView",
      "offset": 54
    },
    {
      "val": "4444",
      "offset": 101
    }
  ],
  "location": "CommonStepDefinitions.get_request_is_triggered_for_the_following_EndPoint_and_path_parameter(String,String)"
});
formatter.result({
  "duration": 19271400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 13
    }
  ],
  "location": "CommonStepDefinitions.status_code_should_be_verified(int)"
});
formatter.result({
  "duration": 236000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3333",
      "offset": 41
    },
    {
      "val": "testerD@abc.com",
      "offset": 49
    },
    {
      "val": "testerDFirst",
      "offset": 68
    },
    {
      "val": "testerDLast",
      "offset": 84
    }
  ],
  "location": "CommonStepDefinitions.verify_that_customer_details_should_be(String,String,String,String)"
});
formatter.result({
  "duration": 20480500,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Verify the customer view endpoint",
  "description": "",
  "id": "customer-view;verify-the-customer-view-endpoint;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User prepares a GET request using the following parameters: \"http://localhost:4547/Blog.Api/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "GET request is triggered for the following EndPoint: \"{customerID}/CustomerView\" and path parameter \"5555\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Status code \"200\" should be verified",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Verify that customer details should be  \"5555\", \"testerE@abc.com\", \"testerEFirst\", \"testerELast\"",
  "matchedColumns": [
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:4547/Blog.Api/",
      "offset": 61
    }
  ],
  "location": "CommonStepDefinitions.user_prepares_a_GET_request_using_the_following_parameters(String)"
});
formatter.result({
  "duration": 64600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "{customerID}/CustomerView",
      "offset": 54
    },
    {
      "val": "5555",
      "offset": 101
    }
  ],
  "location": "CommonStepDefinitions.get_request_is_triggered_for_the_following_EndPoint_and_path_parameter(String,String)"
});
formatter.result({
  "duration": 13516700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 13
    }
  ],
  "location": "CommonStepDefinitions.status_code_should_be_verified(int)"
});
formatter.result({
  "duration": 198100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5555",
      "offset": 41
    },
    {
      "val": "testerE@abc.com",
      "offset": 49
    },
    {
      "val": "testerEFirst",
      "offset": 68
    },
    {
      "val": "testerELast",
      "offset": 84
    }
  ],
  "location": "CommonStepDefinitions.verify_that_customer_details_should_be(String,String,String,String)"
});
formatter.result({
  "duration": 12334300,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify the customer view endpoint",
  "description": "",
  "id": "customer-view;verify-the-customer-view-endpoint;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User prepares a GET request using the following parameters: \"http://localhost:4547/Blog.Api/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "GET request is triggered for the following EndPoint: \"{customerID}/CustomerView\" and path parameter \"6666\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Status code \"200\" should be verified",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Verify that customer details should be  \"6666\", \"testerF@abc.com\", \"testerFFirst\", \"testerFLast\"",
  "matchedColumns": [
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:4547/Blog.Api/",
      "offset": 61
    }
  ],
  "location": "CommonStepDefinitions.user_prepares_a_GET_request_using_the_following_parameters(String)"
});
formatter.result({
  "duration": 73800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "{customerID}/CustomerView",
      "offset": 54
    },
    {
      "val": "6666",
      "offset": 101
    }
  ],
  "location": "CommonStepDefinitions.get_request_is_triggered_for_the_following_EndPoint_and_path_parameter(String,String)"
});
formatter.result({
  "duration": 16766100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 13
    }
  ],
  "location": "CommonStepDefinitions.status_code_should_be_verified(int)"
});
formatter.result({
  "duration": 256200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6666",
      "offset": 41
    },
    {
      "val": "testerF@abc.com",
      "offset": 49
    },
    {
      "val": "testerFFirst",
      "offset": 68
    },
    {
      "val": "testerFLast",
      "offset": 84
    }
  ],
  "location": "CommonStepDefinitions.verify_that_customer_details_should_be(String,String,String,String)"
});
formatter.result({
  "duration": 17013300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Verify the customer view endpoint does not return as details for an invalid ID",
  "description": "",
  "id": "customer-view;verify-the-customer-view-endpoint-does-not-return-as-details-for-an-invalid-id",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "User prepares a GET request using the following parameters: \"\u003cBaseURL\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "GET request is triggered for the following EndPoint: \"\u003cEndPoint\u003e\" and path parameter \"\u003ccustomerID\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Status code \"\u003cStatusCode\u003e\" should be verified",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 24,
      "value": "#And Verify that customer details should be  \"\u003ccustomerID\u003e\", \"\u003cemail\u003e\", \"\u003cfirst_name\u003e\", \"\u003clast_name\u003e\""
    }
  ],
  "line": 25,
  "name": "",
  "description": "",
  "id": "customer-view;verify-the-customer-view-endpoint-does-not-return-as-details-for-an-invalid-id;",
  "rows": [
    {
      "cells": [
        "BaseURL",
        "EndPoint",
        "customerID",
        "StatusCode"
      ],
      "line": 26,
      "id": "customer-view;verify-the-customer-view-endpoint-does-not-return-as-details-for-an-invalid-id;;1"
    },
    {
      "cells": [
        "http://localhost:4547/Blog.Api/",
        "{customerID}/CustomerView",
        "22",
        "404"
      ],
      "line": 27,
      "id": "customer-view;verify-the-customer-view-endpoint-does-not-return-as-details-for-an-invalid-id;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 27,
  "name": "Verify the customer view endpoint does not return as details for an invalid ID",
  "description": "",
  "id": "customer-view;verify-the-customer-view-endpoint-does-not-return-as-details-for-an-invalid-id;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "User prepares a GET request using the following parameters: \"http://localhost:4547/Blog.Api/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "GET request is triggered for the following EndPoint: \"{customerID}/CustomerView\" and path parameter \"22\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Status code \"404\" should be verified",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:4547/Blog.Api/",
      "offset": 61
    }
  ],
  "location": "CommonStepDefinitions.user_prepares_a_GET_request_using_the_following_parameters(String)"
});
formatter.result({
  "duration": 52100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "{customerID}/CustomerView",
      "offset": 54
    },
    {
      "val": "22",
      "offset": 101
    }
  ],
  "location": "CommonStepDefinitions.get_request_is_triggered_for_the_following_EndPoint_and_path_parameter(String,String)"
});
formatter.result({
  "duration": 10941400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 13
    }
  ],
  "location": "CommonStepDefinitions.status_code_should_be_verified(int)"
});
formatter.result({
  "duration": 131900,
  "status": "passed"
});
formatter.uri("ListAllCustomer.feature");
formatter.feature({
  "line": 1,
  "name": "Validate List All Customers",
  "description": "",
  "id": "validate-list-all-customers",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify the customers endpoint",
  "description": "",
  "id": "validate-list-all-customers;verify-the-customers-endpoint",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User prepares a GET request using the following parameters: \"\u003cBaseURL\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "GET request is triggered for the following EndPoint: \"\u003cEndPoint\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Status code \"\u003cStatusCode\u003e\" should be verified",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Verify that the number of customer records in the response is \"\u003cCustomerCount\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "validate-list-all-customers;verify-the-customers-endpoint;",
  "rows": [
    {
      "cells": [
        "BaseURL",
        "EndPoint",
        "StatusCode",
        "CustomerCount"
      ],
      "line": 11,
      "id": "validate-list-all-customers;verify-the-customers-endpoint;;1"
    },
    {
      "cells": [
        "http://localhost:4547/Blog.Api/",
        "Customers",
        "404",
        "6"
      ],
      "line": 12,
      "id": "validate-list-all-customers;verify-the-customers-endpoint;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Verify the customers endpoint",
  "description": "",
  "id": "validate-list-all-customers;verify-the-customers-endpoint;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User prepares a GET request using the following parameters: \"http://localhost:4547/Blog.Api/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "GET request is triggered for the following EndPoint: \"Customers\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Status code \"404\" should be verified",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Verify that the number of customer records in the response is \"6\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:4547/Blog.Api/",
      "offset": 61
    }
  ],
  "location": "CommonStepDefinitions.user_prepares_a_GET_request_using_the_following_parameters(String)"
});
formatter.result({
  "duration": 79500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customers",
      "offset": 54
    }
  ],
  "location": "CommonStepDefinitions.get_request_is_triggered_for_the_following_EndPoint(String)"
});
formatter.result({
  "duration": 13459300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 13
    }
  ],
  "location": "CommonStepDefinitions.status_code_should_be_verified(int)"
});
formatter.result({
  "duration": 128800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 63
    }
  ],
  "location": "CommonStepDefinitions.verify_that_the_number_of_customer_records_in_the_response_is(int)"
});
formatter.result({
  "duration": 16584800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Verify the customer IDs in the customers endpoint",
  "description": "",
  "id": "validate-list-all-customers;verify-the-customer-ids-in-the-customers-endpoint",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User prepares a GET request using the following parameters: \"\u003cBaseURL\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "GET request is triggered for the following EndPoint: \"\u003cEndPoint\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Status code \"\u003cStatusCode\u003e\" should be verified",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Verify that the displayed customer IDs are\" \u003cCustomerIDs\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "validate-list-all-customers;verify-the-customer-ids-in-the-customers-endpoint;",
  "rows": [
    {
      "cells": [
        "BaseURL",
        "EndPoint",
        "StatusCode",
        "CustomerIDs"
      ],
      "line": 22,
      "id": "validate-list-all-customers;verify-the-customer-ids-in-the-customers-endpoint;;1"
    },
    {
      "cells": [
        "http://localhost:4547/Blog.Api/",
        "Customers",
        "404",
        "1111,2222,3333,4444,5555,6666"
      ],
      "line": 23,
      "id": "validate-list-all-customers;verify-the-customer-ids-in-the-customers-endpoint;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 23,
  "name": "Verify the customer IDs in the customers endpoint",
  "description": "",
  "id": "validate-list-all-customers;verify-the-customer-ids-in-the-customers-endpoint;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User prepares a GET request using the following parameters: \"http://localhost:4547/Blog.Api/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "GET request is triggered for the following EndPoint: \"Customers\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Status code \"404\" should be verified",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Verify that the displayed customer IDs are\" 1111,2222,3333,4444,5555,6666\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:4547/Blog.Api/",
      "offset": 61
    }
  ],
  "location": "CommonStepDefinitions.user_prepares_a_GET_request_using_the_following_parameters(String)"
});
formatter.result({
  "duration": 71800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customers",
      "offset": 54
    }
  ],
  "location": "CommonStepDefinitions.get_request_is_triggered_for_the_following_EndPoint(String)"
});
formatter.result({
  "duration": 26709200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 13
    }
  ],
  "location": "CommonStepDefinitions.status_code_should_be_verified(int)"
});
formatter.result({
  "duration": 948800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " 1111,2222,3333,4444,5555,6666",
      "offset": 43
    }
  ],
  "location": "CommonStepDefinitions.verify_that_the_displayed_customer_IDs_are(String)"
});
formatter.result({
  "duration": 141321000,
  "status": "passed"
});
});