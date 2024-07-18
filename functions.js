// declaration

function sayHi() {
  console.log("Hi");
}

sayHi();

// different syntax:

let sayHello = function () {
  console.log("hello");
};

sayHello();

// name the function:

let greeting = function sayGday() {
  console.log("gday");
};

greeting(); // reference to the sayGday fucntion

// hoisting
// this concept is that all fucntion declaretion are fun before anything else, no matter the order of the written code
add(2, 4);

function add(num1, num2) {
  console.log(num1 + num2);
}

// this does not work with function expression:
// sum();

let sum = function (x, y) {
  // fucntion expression, not declaration
  console.log(x + y);
};

// argumnets

function multiply(num1, num2) {
  console.log(arguments);
  return num1 * num2;
}

console.log(multiply(1, 6));
console.log(multiply(6)); //NaN as num 2 is not passed in. it will be defined as undefined
console.log(multiply(1, 6, 7, 8, 9)); // this would still work as the last 3 numbers would just be ignored

// rest operator

function multioply(...args) {
  // accepts unlimited number of arguments ... is rest opertor
  return args.reduce(
    (accumulator, currentvalue) => accumulator * currentvalue,
    1
  );
}

console.log(multioply(1, 5, 4, 3, 2, 4, 5, 56, 6, 7));

function division(denominator, ...numbers) {
  return numbers.map((number) => number / denominator);
}

console.log(division(3, 9, 3, 13, 15, 13, 17));

// default parametres

let code = function (langauge = "JavaScript") {
  console.log(`Write code in ${langauge}`);
};

code("JavaScript");
code("c#");
code("Java");
code(); // Write code in udnefined, unless default parametre assigned

function codeDetails(langauge = "JavaScript", tool = "VS Code") {
  console.log(`Writing code in ${langauge} with ${tool}`);
}

codeDetails();
codeDetails("Python");
codeDetails("C#", "VS studios");

// getters and setters

const course = {
  name: "javascript for beginners",
  duration: 3,
  type: "youtube",
  get details() {
    return `course is ${this.name} and is ${this.duration} hours long on ${this.type}`;
  },
  set details(value) {
    if (typeof value !== "string") {
      throw new Error(`Value, ${value}, is not a string`);
    }
    let parts = value.split(" is "); // splits string where each 'is' is
    let type = value.split(" on "); // splits string where 'on' is
    this.name = parts[0]; // first instance of the split
    this.duration = parts[1]; // second instance
    this.type = type[0];
  },
};

console.log(
  `course is: ${course.name} and is ${course.duration} hours long on ${course.type}`
);

console.log(course.details); // same as above

//course.details = "JavaScript pro is 10 hours";

//console.log(course.details); // now outputs details with same conditons of the splits

// try catch for error handling
try {
  course.details = 40;
} catch (e) {
  console.log(`caught an error ${e.message}`);
}
