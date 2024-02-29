const calculateNumber = require("./0-calcul.js");
const assert = require("assert");

describe("calculateNumber", function() {
  it("summing integers", function() {
    assert.equal(calculateNumber(6, 7), 13);
    assert.equal(calculateNumber(4, 5), 9);
    assert.equal(calculateNumber(5, 5), 10);
  });
  it("rounding up correctly", function() {
    assert.equal(calculateNumber(6.9, 7), 14);
    assert.equal(calculateNumber(3.5, 5.0), 9);
    assert.equal(calculateNumber(4.2, 5.7), 10);
  });
  it("rounding down correctly", function() {
    assert.equal(calculateNumber(6.0, 7.0), 13);
    assert.equal(calculateNumber(4.2, 5.4), 9);
    assert.equal(calculateNumber(4.2, 7), 11);
  });
  it("summing negative integers", function() {
    assert.equal(calculateNumber(-1, 7), 6);
    assert.equal(calculateNumber(4, -15), -11);
    assert.equal(calculateNumber(-9, -8), -17);
  });
  it("checks equality", function() {
    assert.equal(calculateNumber(6, 7), 13);
    assert.equal(calculateNumber(4.2, 5), 9);
    assert.equal(calculateNumber(4.2, 5.7), 10);
  });
});
