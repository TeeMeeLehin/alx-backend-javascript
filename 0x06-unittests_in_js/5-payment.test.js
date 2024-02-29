const sinon = require('sinon');
const assert = require("assert");
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    const spyVar = sinon.spy(console);

    const CNStub = sinon.stub(Utils, "calculateNumber").returns(10);

    sendPaymentRequestToApi(100, 20);
    assert(CNStub.calledWith('SUM', 100, 20));
    assert.strictEqual(CNStub.callCount, 1);
    assert(spyVar.log.calledWith('The total is: 10'));
    assert.strict(spyVar.log.callCount, 1)
    spyVar.log.restore();
    CNStub.restore();
  });
});
