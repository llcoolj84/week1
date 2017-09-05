// Write a program named password.js that takes a single command line argument, a string, and obfuscates it by applying the following rules.

// Every "a" in the string should be replaced with a "4".
// Every "e" in the string should be replaced with a "3".
// Every "o" (oh) in the string should be replaced with a "0" (zero).
// Every "l" (el) in the string should be replaced with a "1" (one).

//define variables
// function that obfuscates the string with the rules



function obfuscate(password) {

  var password1 = password.toString();
  var output = passwordInput.replace(/a/g, 4).replace(/e/g, 3).replace(/o/g, 0).replace(/l/g, 1);
  return output;
}

console.log(obfuscate(process.argv.slice([2]));
