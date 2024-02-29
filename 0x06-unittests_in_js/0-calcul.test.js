const calculateNumber = require("./0-calcul.js");
const assert = require("assert");

describe("calculateNumber test", function() {
  it("checks equality", function() {
    assert.equal(calculateNumber(6, 7), 13);
    assert.equal(calculateNumber(4.2, 5), 10);
  });
});
