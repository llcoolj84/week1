var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }

];


  // find the salesData in an object, add the total of the array,
  // multiply the right provinces sales tax, and print out result.
function sum(input){

  var total =  0;
  for(var i=0;i<input.length;i++) {
    if(isNaN(input[i])){
     continue;
    }
    total += Number(input[i]);
  }
  return total;
}

function calculateSalesTax(salesData, taxRates) {

  var output = {};

  for (var i in salesData){

    var totalSales = (sum(salesData[i].sales));
    var salesTotalTax = (sum(salesData[i].sales)*taxRates[salesData[i].province]);
    var province = salesData[i].province;
    var nameOfCompany = salesData[i].name;

     if (output[nameOfCompany]) {
        output[nameOfCompany].totalSales += totalSales;         // adds additional sales to total sales of the company
        output[nameOfCompany].totalSalesTax += salesTotalTax ; // adds additional salesTax to existing company

     } else {

        output[nameOfCompany] = {totalSales: totalSales, totalSalesTax: salesTotalTax};
     }

    //console.log(salesTotalTax + " " + province + " " + totalSales + " " + nameOfCompany);
  }
  return (output);
}

// console.log(sum(companySalesData[0].sales));
var results = (calculateSalesTax(companySalesData, salesTaxRates));
console.log(results);




// function calculateSalesTax(salesData, taxRates) {
//   // Implement your code here
// }

// var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/