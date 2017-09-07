var person = {
  name: "Paul",
  address: {
    street: "310 W 95th",
    city: "New York",
    zipCode: 10027
  }
};
person["phoneNumbers"] = ['3065525642', '4038048158'];

console.log(person["address"]["city"]);
console.log(typeof person["phoneNumbers"]);
console.log(person["phoneNumbers"] instanceof Object);
console.log(person["phoneNumbers"] instanceof Array);
console.log(person["phoneNumbers"] instanceof String);
console.log(Object.keys(person));