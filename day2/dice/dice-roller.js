function numberOfRolledDice(rolls) {
  var numbers = [];
  for (var i = 0; i < rolls; i++) {
    var number = (Math.floor(Math.random() * 6 + 1));
    numbers.push(" " + number);
  }
  console.log("Rolled " + rolls + " dice:" + numbers)
}

numberOfRolledDice(process.argv.slice(2));


