var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];



// sort by name
var sort1 = students.sort(function(a, b) {
  if (a.name < b.name)
      return -1;
  if (a.name > b.name)
      return 1;
  if (a.name === b.name)
      return b.age - a.age;
});


// sort by value
// students.sort(function (a, b) {
//   return a.age - b.age;
// });



console.log(students);
// console.log("****");
// console.log(sort2);



//********

// var items = [
//   { name: 'Edward', value: 21 },
//   { name: 'Sharpe', value: 37 },
//   { name: 'And', value: 45 },
//   { name: 'The', value: -12 },
//   { name: 'Magnetic', value: 13 },
//   { name: 'Zeros', value: 37 }
// ];

// // sort by value
// items.sort(function (a, b) {
//   return a.value - b.value;
// });

// sort by name
// items.sort(function(a, b) {
//   var nameA = a.name.toUpperCase(); // ignore upper and lowercase
//   var nameB = b.name.toUpperCase(); // ignore upper and lowercase
//   if (nameA < nameB) {
//     return -1;
//   }
//   if (nameA > nameB) {
//     return 1;
//   }

//   // names must be equal
//   return 0;
// });
// var input = [
//   { x: 3, y: 4 },
//   { x: 12, y: 5 },
//   { x: 8, y: 15 }
// ];
// var result = input.map(function(object){
//   return (Math.sqrt(Math.pow(object.x,2) + Math.pow(object.y,2)));
// });




// Write a sorting function (sometimes called a custom comparator), that sorts the above array first by the name ascending alphabetically, and in cases where the names are equal sort by descending age.

// Read about the Array.prototype.sort() function on MDN in order to implement your solution
// Did you notice that the sort() function modifies the array being sorted, whereas filter() and map() functions produced new arrays?

