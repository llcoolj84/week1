module.exports = {
  FAVNUMBERS: [12345, 678910],
  FAVFOOD: "pizza",
  FAVLETTER: "k",
  favnumbers: function() {
    console.log("These are my 5 favorite numbers " + this.FAVNUMBERS);
  },
  favletter: function() {
    console.log("These are my 3 favorite letters " + this.FAVLETTER);
  },
  favfood: function() {
  console.log("My favorite food is " + this.FAVFOOD);
  }
};