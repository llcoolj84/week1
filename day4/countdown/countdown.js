var countdownGenerator = function (x) {

var time = x;

return function() {
     // This inner function accesses and assigns the value of
     // the variable id, which was defined in the parent function

     if (time > 0) {
      console.log("T-minus " + time + "...");
    } else if (time === 0) {
      console.log("Blast Off!")
    } else {
      console.log("Rockets already gone,bub!")
    }

     time -= 1;
     return time;
   }
};

var countdown = countdownGenerator(3);

countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!

// function makeIdGenerator() {
//   var id = 0;

//   // The following is the closure function
//   return function() {
//     // This inner function accesses and assigns the value of
//     // the variable id, which was defined in the parent function
//     id += 1;
//     return id;
//   }
// }