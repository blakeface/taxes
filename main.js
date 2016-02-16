module.exports = {
  calcTax: function (income) {
    if ( income < 11 ) return ( income * 0.1 );
    if ( income < 21 ) return ( ((income-10) * 0.07) + 1 ).toFixed(2);
    if ( income < 31 ) return ( ((income-20) * 0.05) + 1.7 ).toFixed(2);
    return ( ((income-30) * 0.03) + 2.2 ).toFixed(2);
  }
};
