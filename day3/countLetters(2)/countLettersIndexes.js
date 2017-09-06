function countLetters(str){
  var spaces = str.toLowerCase().split(" ").join();
  console.log(spaces);
  var myCharCount = {};

  for (i=0; i < spaces.length; i ++) {
    for (var i = 0; i < spaces.length; i ++) {
      if (myCharCount[spaces[i]]) {
          myCharCount[spaces[i]].push(i);
      } else {
          myCharCount[spaces[i]] = [i];
      }

    }
    console.log(myCharCount);
  }


}
countLetters('lighthouse in the house')
