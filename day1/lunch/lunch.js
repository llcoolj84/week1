

function whatToDoForLunch(hungry, availableTime) {


  if (hungry === false && availableTime > 0){
    console.log("Get back to work!");
  }
    else if (hungry === true && availableTime < 20){
      console.log("pick up something and eat in the lab!");
    }
    else if (hungry === true && availableTime >= 20 && availableTime <= 45) {
      console.log("try a place in Gastown");
      }
    else if (hungry === true && availableTime > 30) {
      console.log("don't go too long, this is a bootcamp! . You should reconsider!")
    }

}


/*
 * This is some test runner code that's simply calling our whatToDoForLunch function
 * defined above to verify we're making the right decisions. Do not modify it!
 */

console.log("I'm hungry and I have 20 minutes for lunch.");
whatToDoForLunch(true, 20);
console.log("---");

console.log("I'm hungry and I have 50 minutes for lunch.");
whatToDoForLunch(true, 50);
console.log("---");

console.log("I'm not hungry and I have 30 minutes for lunch.");
whatToDoForLunch(false, 30);
console.log("---");

console.log("I'm hungry and I have 15 minutes for lunch.");
whatToDoForLunch(true, 15);