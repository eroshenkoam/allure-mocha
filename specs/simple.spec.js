const { allure } = require("allure-mocha/runtime");

describe("Allure", () => {
  it("some first simple spec", () => {});
  describe("dipper test", () => {
    it("some first second spec", () => {
        console.log(allure)
    });
  });
});
