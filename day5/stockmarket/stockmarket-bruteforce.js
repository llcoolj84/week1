var stockprice = [45, 11 , 35, 31, 40, 38, 1, 55, 61, 2];



var maxProfit = function(stockprices) {

var stockpriceBuy = stockprices;
var buy = 0;
var sell = 0;
 var maxProfit = 0;

  //1. find lowest buy price in the array less than the last index number


var buyprice = stockpriceBuy[0];

for (var i = 0; i < stockprices.length - 1; i++){
    if (stockpriceBuy[i] < buyprice){
        buyprice = stockpriceBuy[i];
    }
}

//2. find highest sell price in the array less than the last index number

var sellprice = stockprices[stockprices.indexOf(buyprice)];

for (var i = stockprices.indexOf(buyprice); i < stockprices.length; i++){

    if (stockprices[i] > sellprice){
        sellprice = stockprices[i];
    }
}
// 3. final calculation

maxProfit = sellprice - buyprice;
return maxProfit;

};

console.log(maxProfit(stockprice));


