var words = ["ground", "control", "to", "major", "tom"];



function map (array, cb){
  var newArray = [];

  array.forEach(function(element){
    newArray.push(cb(element)); // when you invoke the funciton you also have to invoke the element
  });

    return console.log(newArray);
  }




// var new_array = arr.map(function callback(currentValue, index, array) {
    // Return element for new_array
// }[, thisArg])

map(words, function(word) { // map is a function with 2 parameters
  return word.length;
});


map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});

//answer 1 // [6, 7, 2, 5, 3]

// answer 2   [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

// answer 3    [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]
