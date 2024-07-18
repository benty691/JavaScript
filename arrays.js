const numbers = [1, 2, 3, 4, 5, 6];

numbers.push(7);

console.log(numbers); //adds 7 to the end of the array

numbers.unshift(0);

console.log(numbers); //adds 0 to the start of the array

numbers.splice(1, 0, 1.1, 1.2, 1.3);

console.log(numbers); //adds 1.1, 1.2 and 1.3 to the array, after index 1 of the array, as denoted (1 //here, 0, 1.1, 1.2, 1.3)

// Finding elements

const numberList = [1, 2, 3, 4, 5, 6, 4];

let indexOfFour = numberList.indexOf(4); // 3

const lastIndexOfFour = numberList.lastIndexOf(4);

const indexOfTen = numberList.indexOf(10); // -1. Menaing does not exist in this array. Should do conditional check:

if (indexOfTen === -1) {
  console.log("10 is not in the array");
}

if (!numberList.includes(10)) {
  console.log("10 is not found in the array");
}

// Findiong Elemnets

const employees = [
  {
    id: 1,
    name: "dale",
  },
  {
    id: 2,
    name: "Soph",
  },
  {
    id: 3,
    name: "Me",
  },
];

// const employee = employees.find(function (e) {
//   return e.name === "dale";
// });

const employee = employees.find((e) => e.name === "dale");
console.log(employee);

// arrow functions

// function add(num1, num2){
//     return num1 + num2;
// }

//const add = (num1, num2) => num1 + num2;

const add = (num1, num2) => {
  // this is the same as above.
  return num1 + num2;
};

// assign to a variable, put into brackets and then =>, then code block

//Removing elements

const num = [1, 2, 3, 4, 5, 6];

const lastNum = num.pop();
console.log(`last element: ${lastNum}`);

const firstNum = num.shift();
console.log(`last element: ${firstNum}`);

const middleNum = num.splice(2, 3);
console.log(`middle element: ${middleNum}`);

console.log(num);

//emptying an array

const array1 = [1, 2, 3, 4, 5, 5];

array1.length = 0; // emptys the array

// mapping an array:

var mappedArray = [1, 2, 3, 4, 5, 6, 6, 9];

const squaredMappedArray = [mappedArray.map((sqr) => sqr * sqr)];

console.log(squaredMappedArray);

// mapping objects

var draegerEmployees = [
  { id: 1, name: "Dale", email: "Dale@email.com" },
  { id: 2, name: "Sophie", email: "Soph@email.com" },
  { id: 3, name: "John", email: "John@email.com" },
];

const mappedEmployees = draegerEmployees.map((objectEmployee) => ({
  ...draegerEmployees,
  email: objectEmployee.email.toLowerCase(),
}));

console.log(mappedEmployees);
