var stockPrices = [45, 25, 35, 31, 40, 38, 11];

// Elegant buy method
function min(stockPrices) {
  var buyOptions = stockPrices;
  buyOptions.pop();

  var buy = Math.min.apply(Math, buyOptions);
  return buy;
}
var boughtAt = min(stockPrices);
console.log(boughtAt);

//Elegant sell method

var sellOptions = stockPrices.indexOf(boughtAt);
var options = stockPrices.length - 1;
var sell = stockPrices.slice( sellOptions, options);


function max(sell) {
   var sold = Math.max.apply(Math, sell);
   return sold;
 }
var soldAt = max(sell);

console.log(soldAt);

// Find you max profit
var maxProfit = (soldAt - boughtAt);

console.log (maxProfit);