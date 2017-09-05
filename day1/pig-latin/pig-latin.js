function translatePigLatin(str) {



  for (var k = 0; k < str.length; k ++)
  {

    var finalResult = "";
    var outsideArray = str[k];

    for(var i = 1; i < outsideArray.length; i++)
    {
    finalResult = finalResult + outsideArray[i];
    }
    console.log(finalResult + outsideArray[0] + "ay");
  }
}

translatePigLatin(process.argv.slice(2));

 //alternative answer
   // result.push(result.shift());
    // result.push('ay');

    // return result.join('');