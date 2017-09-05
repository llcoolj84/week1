
function reverseString(str) {


  for (var k = 0; k < str.length; k ++)
  {
      var newString = "";
    var outsideArray = str[k];

    for (var i = outsideArray.length - 1; i >= 0; i--) {
        newString += outsideArray[i];
    }
     console.log(newString);
  }
}
// console.log(reverseString('hello'));

reverseString(process.argv.slice(2));
