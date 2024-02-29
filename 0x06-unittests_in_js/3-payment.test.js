const sinon = require('sinon');
const assert = require("assert");
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    const spyVar = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);
    assert(spyVar.calculateNumber.calledWith('SUM', 100, 20));
    assert.strictEqual(spyVar.calculateNumber.callCount, 1);
    spyVar.calculateNumber.restore();
  });
});
