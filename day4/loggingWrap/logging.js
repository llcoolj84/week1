var wrapLog = function (callback, name) {

    return function() {
      console.log(name + " is " + callback.apply());
    };


};

var area = function (x, y) {
  return x * y;
};
var logArea = wrapLog(area, "area");

logArea(5, 3); // area(5, 3) => 15
logArea(3, 2); // area(3, 2) => 6

var volume = function (x, y, z) {
  return x * y * z;
};
var logVolume = wrapLog(volume, "volume");



logVolume(5, 3, 2); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24

// Create a function called wrapLog() that takes in a function (callback) and a string (name) and returns a function that does the same thing as callback but also logs the name, input parameters, and return value of the callback function:

// function addContact(id, refreshCallback) {    // this is an example to work from
//     refreshCallback();
//     // You can also pass arguments if you need to
//     // refreshCallback(id);
// }

// function refreshContactList() {
//     alert('Hello World');
// }

// addContact(1, refreshContactList);