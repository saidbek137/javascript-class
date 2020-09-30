// consist of key:value pairs
//var name = "John"

var teacher = "John Doe";
var person = {
  fname: "John",
  lname: "Doe",
  age: 35,
  isMarried: true,
  profession: "doctor",
  apartment: "1b"
};

console.log(person.fname);

var cars = ["Audi", "BMW", "Mercedez-Benz", "GM"];

console.log(cars[1], cars[0]);

var fruits = ["apples", "oranges"];
var numbers = [12, 54, 23, 12, 90];

var tenants = [
  {
    name: "John Doe",
    age: 24,
  },
  {
    name: "James smith",
    age: 35,
  },
  {
    name: "Bob Mark",
    age: 45,
  },
  {
    name: "Donald Trump",
    age: 76,
  },
];

console.log(tenants[0].name);
console.log(tenants[1].name);
console.log(tenants[2].name);
console.log(tenants[3].name);

console.log(tenants.length)
for (var i = 0; i < tenants.length; i++) {
  console.log(tenants[i].name);
}





// What are the ways to create an Object in javascript?