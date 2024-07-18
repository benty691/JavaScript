//object
const cat = {
  name: "molly",
  colour: "black",
  age: 11,
  weight: 5,
  eat: function () {
    console.log("cat food");
  },
  meow: function () {
    console.log("meow");
  },
};

//factory fucntions
// const cat2 = {
//     name: "Khama",
//     colour: "tabby",
//     age: 11.5,
//     weight: 7,
//     eat: function () {
//       console.log("cat food");
//     },
//     meow: function () {
//       console.log("meow");
//     },
//   };

function getCat(name, colour, age, weight) {
  return {
    name,
    colour,
    age,
    weight,
    eat: function () {
      console.log(this.name + "food");
    },
    meow: function () {
      console.log(this.name + "meow");
    },
  };
}

const cat3 = getCat("Tazer", "tabby", 2, 4);
console.log(cat3);

//constructor function:

function Dog(name, breed, age, weightInKg) {
  // constructor fucntion
  // this = {}

  //Add properties to this
  (this.name = name),
    (this.breed = breed),
    (this.age = age),
    (this.weightInKg = weightInKg);

  this.eat = function () {
    console.log(this.name + ": chomp");
  };

  this.bark = function () {
    console.log(this.name + ": woof");
  };

  //return this
}

const anotherDog = new Dog("Molly", "Cavoodle", 12, 7);

//new creates an empty javascript object, then sets the this keyword to point to empty object in memory, then retunr the this keyword implicitly

console.log(anotherDog);

// Dynamic objects

const person = {
  name: "Dale:",
};

console.log(person);

person.favFood = "KFC"; // this will update the object adding a new key and related value
person["colourSkin"] = "White"; // this is just different syntax as above but same fucntionality
console.log(person);

delete person.colourSkin; // removes from object

person.eat = function () {
  // adds a fucntion to the object
  console.log("Start eating");
};

person.eat();

//constructor property

const car = {
  make: "subaru",
};

console.log(car.constructor);

//let newObj = {};
let newObj = new Object(); // these both mean the same things

new String(); //'Dale'
new Boolean(); // true/false
new Number(); //1,2,3

//functions are objects

function add(num1, num2) {
  return (num1 = num2);
}

const n = add;

console.log(n(2, 4));

// function Programmer(name) {
//   this.name = name;
//   this.writeCode = function () {
//     console.log("Code in JS");
//   };
// }

// console.log(Programmer.length);
// console.log(Programmer.constructor);

const Programmer = new Function(
  "name",
  `
    this.name = name;
    this.writeCode = function () {
        console.log("Code in JS");
    }
    `
);

const newProgrammer = new Programmer("Dale");
newProgrammer.writeCode();

//value vs reference types

let c = 14;
let d = c;

c = 22;

console.log(c); //22
console.log(d); //14
// This occurs as primitave are copied by their value

let a = { value: 22 };
let b = a;

a.value = 211;

console.log(a); //211
console.log(b); //211
//this occurs as objects are copied by their reference. Not the same as primitive values such as numbers

//Enumerating properties of an object

let work = {
  location: "notting Hill",
  company: "Draeger",
  monthsWorked: 7,
};

const keys = Object.keys(work);

//console.log(keys); Array of keys of object

let values = Object.values(work);
//console.log(values); // Array of values of keys eg notting hill and drager

const entries = Object.entries(work);
//console.log(entries);   [ 'location', 'notting Hill' ], [ 'company', 'Draeger' ], [ 'monthsWorked', 7 ]

for (const key of Object.keys(work)) {
  console.log(key);
} // can do this for values and entries aswell

//cloning an object

let init = { value: 11 };
let final = { ...init }; // This and Below do the same thing

//Object.assign(final, init);

init.value = 22;

console.log(init);
console.log(final);

//template literals

let firstName = "Dale";
let lastName = "Bent";

//let fullname = firstName + " " + lastName

let fullname = `${firstName} ${lastName}`; //back ticks `

//Date Object

let now = new Date();
console.log(now);

let Jan10_1999 = new Date(0);

console.log(Jan10_1999); // 1970-01-01T00:00:00.000Z

let christmas = new Date("December 25 2024 11:59");

console.log(christmas); // 2024-12-25T00:59:00.000Z

now.getDate();

now.getFullYear();

now.getMonth();

now.getTimezoneOffset();
