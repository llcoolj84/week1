//Write a function countLetters that can return to us all the unique characters that exist in a string that is passed into the function

function countLetters(str){
  var noSpaces = str.toLowerCase().split(" ").join("");
  console.log(noSpaces);
  var myCharCount = {};

  for (i=0; i < noSpaces.length; i ++) {
    for (var i = 0; i < noSpaces.length; i ++) {
      if (myCharCount[noSpaces[i]]) {
          myCharCount[noSpaces[i]] += 1;
      } else {
          myCharCount[noSpaces[i]] = 1;
      }

    }
    console.log(myCharCount);
  }


}
countLetters('lighthouse in the house')

//Furthermore, the function should also report back how many instances of each letter were found in the string.

//our function countLetters needs to return an object that can represent the stats for the sentence it is given: all the characters found in the input string, and their respective counts.

//What should the object returned back by countLetters look like?

// Perhaps it could return an object where each unique character encountered is a property of the object and the value for that property/key should be the number of occurrences for that character.

// So countLetters("lighthouse in the house") would return this:
//Note that we are skipping and not counting spaces.

//Approach
// Start a new project (new folder) and remember to git init and commit frequently. You should also connect the repository with a new empty public repository on your GitHub profile.

