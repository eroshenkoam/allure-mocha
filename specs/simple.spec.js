const AllureRuntime = require("allure-mocha/runtime");

describe("This is suite", () => {

  AllureRuntime.allure.feature("This is feature") 
  AllureRuntime.allure.story("This is story")
  it("some first second spec", () => {
    AllureRuntime.allure.step("Open main page", () => {
        // browser.url("https://www.google.com");
    });
    AllureRuntime.allure.step("Go to repository", () => {
        // ... next steps
    })
  });
});
