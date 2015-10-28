var expect = require('chai').expect;
var cash = require('../cash.js');

describe('Simple Payments', function() {

  it('should have getChange() method', function() {
    expect(cash).to.be.an('object');
    expect(cash.getChange).to.be.a('function');
  });

  // ราคาสินค้า 51 จ่าย 100 ได้ทอน 49บาท เป็นเงิน 20, 20, 5, 2, 2 ตามลำดับ
  it('getChange(51, 100) should return [20, 20, 5, 2, 2]', function() {
    expect(cash.getChange(51, 100)).to.deep.equal([20, 20, 5, 2, 2]);
  });

  it('getChange(234, 1000) should return [500, 100, 100, 50, 10, 5, 1]', function() {
    expect(cash.getChange(234, 1000)).to.deep.equal([500, 100, 100, 50, 10, 5, 1]);
  });

  it('getChange(11, 1000) should return [500, 100, 100, 100, 100, 50, 20, 10, 5, 2, 2]', function() {
    expect(cash.getChange(11, 1000))
      .to.deep.equal([500, 100, 100, 100, 100, 50, 20, 10, 5, 2, 2]);
  });

  it('getChange(12, 20) should return [5, 2, 1]', function() {
    expect(cash.getChange(12, 20))
      .to.deep.equal([5, 2, 1]);
  })

});
