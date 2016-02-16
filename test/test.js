var code = require('../main.js');
var expect = require('chai').expect;

describe('Tax Calculator', function(){

  it('tier 1: 10%', function() {
    expect(code.calcTax(1)).to.equal(0.1);
    expect(code.calcTax(10)).to.equal(1);
  });
  it('tier 2: 7% + 10%', function(){
    expect(code.calcTax(15)).to.equal('1.35');
    expect(code.calcTax(20)).to.equal('1.70');
  });
  it('tier 3: 5% + 17%', function(){
    expect(code.calcTax(25)).to.equal('1.95');
    expect(code.calcTax(30)).to.equal('2.20');
  });
  it('tier 4: 3% + 22%', function(){
    expect(code.calcTax(35)).to.equal('2.35');
    expect(code.calcTax(40)).to.equal('2.50');
    expect(code.calcTax(100)).to.equal('4.30');
  });
});
