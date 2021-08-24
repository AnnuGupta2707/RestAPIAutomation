package com.qa.stepDefinitions;

import static io.restassured.RestAssured.given;
import java.util.ArrayList;
import java.util.HashMap;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.junit.Assert;

public class CommonStepDefinitions {

	public Response gResponse;
	@Given("^User prepares a GET request using the following parameters: \"([^\"]*)\"$")
	public void user_prepares_a_GET_request_using_the_following_parameters(String baseURI) throws Throwable {
		try{
			RestAssured.baseURI=baseURI;
		}catch(Exception e) {
			e.printStackTrace();
		}
	}

	@When("^GET request is triggered for the following EndPoint: \"([^\"]*)\"$")
	public void get_request_is_triggered_for_the_following_EndPoint(String endPoint) throws Throwable {
		try{
			gResponse=given()
		  		.when()
		  		.get(endPoint);
		}catch(Exception e) {
			e.printStackTrace();
		}
	}

	@Then("^Status code \"([^\"]*)\" should be verified$")
	public void status_code_should_be_verified(int expStatusCode) throws Throwable {
		try{
			int actualStatusCode=gResponse.then().extract().statusCode();
			Assert.assertEquals(actualStatusCode, expStatusCode);
		}catch(Exception e) {
			e.printStackTrace();
		}
	}

	@Then("^Verify that the number of customer records in the response is \"([^\"]*)\"$")
	public void verify_that_the_number_of_customer_records_in_the_response_is(int expCustCount) throws Throwable {
		try{
			String response=gResponse.then().extract().response().asString();
			JsonPath jsonPathEvaluator=new JsonPath(response);
			ArrayList<Object> data=jsonPathEvaluator.get("data");
			Assert.assertEquals(data.size(), expCustCount);
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
	

	@When("^GET request is triggered for the following EndPoint: \"([^\"]*)\" and path parameter \"([^\"]*)\"$")
	public void get_request_is_triggered_for_the_following_EndPoint_and_path_parameter(String endPoint, String pathParam1) throws Throwable {
		try{
			gResponse=given()
		  		.when()
		  		.get(endPoint,pathParam1);
		}catch(Exception e) {
			e.printStackTrace();
		}
	}

	@Then("^Verify that customer details should be  \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\"$")
	public void verify_that_customer_details_should_be(String expCustomerID, String expEmail, String expFirstName, String expLastName) throws Throwable {
		try{
			String response=gResponse.then().extract().response().asString();
			JsonPath jsonPathEvaluator=new JsonPath(response);
			HashMap<String,String> data=jsonPathEvaluator.get("data");
			String actCustomerID=data.get("customerID");
			String actEmail=data.get("email");
			String actFirstName=data.get("first_name");
			String actLastName=data.get("last_name");
			Assert.assertEquals(expCustomerID, actCustomerID);
			Assert.assertEquals(expEmail, actEmail);
			Assert.assertEquals(expFirstName, actFirstName);
			Assert.assertEquals(expLastName, actLastName);
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	@Then("^Verify that the displayed customer IDs are\"([^\"]*)\"$")
	public void verify_that_the_displayed_customer_IDs_are(String custIDs) throws Throwable {
		try {
			String[] expCustID=custIDs.split(",");
			String response=gResponse.then().extract().response().asString();
			JsonPath jsonPathEvaluator=new JsonPath(response);
			ArrayList<String> data=jsonPathEvaluator.get("data");
			for(int i=0;i<data.size();i++) {
				int actCustID=jsonPathEvaluator.get("data["+i+"].id");
				Assert.assertEquals(actCustID,Integer.parseInt(expCustID[i].trim()));
			}
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
}
