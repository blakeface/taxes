var code = require('../main.js');
var expect = require('chai').expect;

describe('Tax Calculator', function(){

  it('should tax 10% on $0-10', function() {
    expect(code.calcTax(1)).to.equal(0.1);
    expect(code.calcTax(10)).to.equal(1);
  });
  it('should tax 7% on $11-20 + tier 1 taxes (10%)', function(){
    expect(code.calcTax(20)).to.equal(1.7);
  });
  it('should tax 5% on $21-30 + tier 1 & 2 taxes (10 & 7%)', function(){
    expect(code.calcTax(30)).to.equal(2.2);
  });
  it('should tax 3% on everything above $31 + tier 1, 2, & 3 taxes (10, 7, & 5%)', function(){
    expect(code.calcTax(40)).to.equal(2.5);
  });

});
