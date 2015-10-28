var expect = require('chai').expect;
var cash = require('../cash.js');

describe('Simple Payments', function() {

  it('should have getChange() method', function() {
    expect(typeof(cash)).to.equal('object');
    expect(typeof(cash.getChange)).to.equal('function');
  });

});
