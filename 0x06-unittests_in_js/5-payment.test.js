const sinon = require('sinon');
const assert = require("assert");
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let spyVar;

  beforeEach(function () {
    spyVar = sinon.spy(console, 'log');
  })

  afterEach(function () {
    spyVar.restore();
  })

  it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    sendPaymentRequestToApi(100, 20);
    assert(spyVar.calledWith('The total is: 120'));
    assert.strict(spyVar.callCount, 1)
  });

  it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    sendPaymentRequestToApi(10, 10);
    assert(spyVar.calledWith('The total is: 20'));
    assert.strict(spyVar.callCount, 1)
  });

});
