// Modify the callback function in the previous example so that logs the index of the array where Waldo is found, ie. "Found Waldo at index 2!". (You will need to modify actionWhenFound to receive the index.)





// The second argument/parameter is expected to be a function



function findWaldo(arr, found) {
  arr.forEach(function(name, i, myArr) {
    if (name === "Waldo") {
      found(i, myArr);
    }
  })
}
  // for (var i = 0; i < arr.length; i++) {
  //   if (arr[i] === "Waldo") {
  //     found(i);   // execute callback
  //   }
  // }



// function actionWhenFound(arrayIndex) {
//   console.log("Found waldo at index " + arrayIndex + "!");
// }

function actionWhenFound(index, array) {
  console.log("Found waldo at index" + index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


