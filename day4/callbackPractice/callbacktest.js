
var numbers = [1, 2, 3, 4, 5, 7, 10, 14, 17, 18];
var evens = numbers.filter(function(num) {
  return (num % 2 == 0);
});
console.log("Subset of even numbers:", evens);

-----------


var words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

longWords = words.filter(function(word){
  return word.length > 6;
});


// Filtered array longWords is ["exuberant", "destruction", "present"]