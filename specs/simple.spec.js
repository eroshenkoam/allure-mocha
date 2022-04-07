const AllureRuntime = require("allure-mocha/runtime");

describe("Allure", () => {
  it("some first simple spec", () => {});
  describe("dipper test", () => {
    it("some first second spec", () => {
      AllureRuntime.allure.step("demo step created");
    });
  });
});
