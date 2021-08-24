package runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		features="C:\\Users\\annug\\eclipse-workspace\\RestApiAutomationFramework\\src\\test\\java\\com\\qa\\featues"
		,glue= {"com.qa.stepDefinitions"}
		//,tags= {"@sanity"}
		,plugin= {"pretty","html:test-output","json:json_output/cucumber.json","junit:junit_output/cucumber.xml"}
		,monochrome=true
		,dryRun=false
		)
public class RunCukes {

	}


