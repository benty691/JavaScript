/* -, +, *, /, % */

let programmingLanguage = "javaScript"; //assigns, meaning = does not check for equality, rather it is an assignment operator, == is used for check

let num1 = 15;
let num2 = 115;

const isNum1Greater = num1 > num2;

console.log(isNum1Greater); // false

// equality

let a = 2;
let b = "2";

console.log(a == b); // true
//truthy

console.log(a === b); // false

//loose equality, does not enforce type similarity
console.log(1 == "1"); //true

console.log(true == "1"); // also true

//always use 3 equals signs when checking for actual equality

// ternary operators
let age = 16;
const canDrive = age >= 16 ? true : false; // if age is greather than or = to 16, candrive is true, if less than, candrive is false
console.log(canDrive);

let points = 110;
const customerType = points >= 100 ? "gold" : "silver"; // assigning a value to a variable consitionally
console.log(customerType);

// Logical operators

//OR (||)

console.log(true || true); // returns true, e.g only one has to be true
console.log(false || true); // returns true
console.log(true || false); // returns true
console.log(false || false); // returns false

//AND (&&)

console.log(true && true); // returns true e.g both have to be true
console.log(false && true); // retunrs false
console.log(true && false); // returns false
console.log(false && false); /// returns false

//NOT (!)

console.log(!true); // returns false

let isClosedOnSuday = true;
let isrestrauntOpen = !isClosedOnSuday;
console.log("Is open? " + isrestrauntOpen); // false

//NULL coalescing (??)

let n = null;
const result = n ?? false; //this is the same as (n !== null && !== undefined) ? false: true;
console.log(result); //false

//Logical operators with non booleans

/*
falsy values are:

- undefined
- null
- 0 
- false
- ""
- NaN
*/

// Anything not included above is truthy

let userColour = "blue";
let defaultColur = "red";

const currentColour = userColour || defaultColur;

console.log(currentColour); // returns 'blue' as it is the first non falsy value. If userColour was set to "", then this would retunr red
