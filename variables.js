var data = "this is data"; // old way

let newData = "this is the new way to assign a variable, let";

let name; // do not have to assign value at point of declaration
name = "dale";

console.log(newData);

//const variables
const BIRTHDAY = "19/09/2000"; // make uppercase to note is const

//birthday = "2020"; // throws error, cannot change a const variable

console.log(BIRTHDAY);

// primitive types, meaning only contain a singular value

//string
let myCarType = "subaru";

//number
let myAge = 23;
let pi = 3.14;

//BigInt
let veryLargeNumber = 64783223483n;

//bool
let amIGay = false;

//undefined
let favColour;
console.log(favColour); // value is udefines here

//null
myAge = null;

//symbol
const uniqueKey = Symbol();

//object (this is non primitive, meaning a reference type)
let course = {
  name: "JavaScript for beginners",
  hours: 3,
};

// javascript is dynamically typed, see:

let myName = "Dale";
console.log(myName);

myName = 100;
console.log(myName);

myName = true;
console.log(myName);
// this allows you to reassign variables to differnt types

// Objects
let example = {
  name: "JavaScript for beginners",
  hours: 3,
};
// allows you to store key value pairs (name, hours)

console.log(example.name); //references the name from within the object called example

example.name = "javaScript redfined"; // you can redifne the variable name within the object like so

console.log(example.name);

// arrays
let productColours = ["blue", "green", "red"]; // typeof is an object

console.log(productColours[0]); //blue
console.log(productColours[1]); //green

productColours[2] = "orange";

console.log(productColours[2]); // orange
console.log(productColours.length); // length of the array

//functions
function sayHi(name) {
  // inside of () is called parameter variables, eg name in this contexty
  console.log("Hi, " + name);
}

let parseData = "mike";
sayHi(parseData);

// type of fucntions

function multiply(num1, num2) {
  const result = num1 * num2;
  return result; // must retunr a value as if you do not, the fucntion will return undefined by default
}

console.log(multiply(6, 19));
