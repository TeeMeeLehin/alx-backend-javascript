const calculateNumber = require("./1-calcul.js");
const assert = require("assert");

describe("calculateNumber", function() {
  it("SUM type", function() {
    assert.equal(calculateNumber('SUM', 6, 7), 13);
    assert.equal(calculateNumber('SUM', 3.5, 5.0), 9);
    assert.equal(calculateNumber('SUM', 4.2, 5.7), 10);
  });
  it("SUBTRACT type", function() {
    assert.equal(calculateNumber('SUBTRACT', 17.9, 7), 11);
    assert.equal(calculateNumber('SUBTRACT', 4.2, 5.7), -2);
  });
  it("DIVIDE type", function() {
    assert.equal(calculateNumber('DIVIDE', 6.0, 2.0), 3);
    assert.equal(calculateNumber('DIVIDE', 4.2, 0.5), 4);
    assert.equal(calculateNumber('DIVIDE', 4.2, 0.3), 'Error');
  });
});
