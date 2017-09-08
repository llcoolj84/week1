module.exports = {
  FAVNUMBERS: 12345,
  FAVFOODS: "pizza",
  FAVLETTERS: "k",
  favnumbers: function() {
    console.log("These are my 5 favorite numbers " + this.FAVNUMBERS);
  },
  favletter: function() {
    console.log("These are my 3 favorite letters " + this.FAVLETTER);
  },
  favfood: function() {
  console.log("These are my 2 favorite foods" + this.FAVFOOD);
  }
};