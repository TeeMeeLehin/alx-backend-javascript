const calculateNumber = require("./2-calcul_chai.js");
const expect = require('chai').expect;

describe("calculateNumber", function() {
  it("SUM type", function() {
    expect(calculateNumber('SUM', 6, 7)).to.equal(13);
    expect(calculateNumber('SUM', 3.5, 5.0)).to.equal(9);
    expect(calculateNumber('SUM', 4.2, 5.7)).to.equal(10);
  });
  it("SUBTRACT type", function() {
    expect(calculateNumber('SUBTRACT', 17.9, 7)).to.equal(11);
    expect(calculateNumber('SUBTRACT', 4.2, 5.7)).to.equal(-2);
  });
  it("DIVIDE type", function() {
    expect(calculateNumber('DIVIDE', 6.0, 2.0)).to.equal(3);
    expect(calculateNumber('DIVIDE', 4.2, 0.5)).to.equal(4);
    expect(calculateNumber('DIVIDE', 4.2, 0.3)).to.equal('Error');
  });
});
