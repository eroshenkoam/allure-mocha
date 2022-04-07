const AllureRuntime = require("allure-mocha/runtime");

describe("This is suite", () => {
  it("some first second spec", () => {
    AllureRuntime.allure.feature("This is feature");
    AllureRuntime.allure.story("This is story");
    AllureRuntime.allure.step("Open main page", () => {
      // browser.url("https://www.google.com");
    });
    AllureRuntime.allure.step("Go to repository", () => {
      // ... next steps
    });
  });
});
