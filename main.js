module.exports = {
  calcTax: function (income) {
    if ( income < 11 ) return ( income * 0.1 );
    if ( income < 21 ) return ( ((income-10) * 0.07) + 0.1 );
    if ( income < 31 ) return ( ((income-20) * 0.05) + 0.17 );
    return ( ((income-30) * 0.03) + 0.22 );
  }
}
