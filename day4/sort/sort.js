
var array = [10, 2, 5, 1, 9];

array.sort(function(a,b){ // the conditional function that compares the values so it will overcome the 'string' comparison of sort()
    return a - b;
});
// console.log(result);
console.log(array);


