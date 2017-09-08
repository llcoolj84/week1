// import module syntax

//var myModule = require("./my-module");


//export module

//module.exports = function() { /* ... */ }

// Implement your own module that exports an object containing a function. However the function you export should invoke a 'private' function that is defined within your module but not exported from it.

// Implement a Node.js script that imports the functionality of your module and invokes at least one exported function.



//example module

// module.exports = {
//   PHI: 1.618,
//   explain: function() {
//     console.log("(X+Y) is to X as X is to Y: (X+Y)≈" + this.PHI);
//   }
// };


// importing example module

var myNumbers = require("./test-module.js");

console.log(myNumbers);  // logs a myNumber object

myNumbers.favnumbers();  // invokes the function `favnumbers`

