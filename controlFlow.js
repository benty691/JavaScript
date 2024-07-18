//basic example of if-else
let priceOfChoc = 2.99;
let hasCashAmount = 4;

const canBuyChoc = hasCashAmount >= priceOfChoc;

if (canBuyChoc) {
  console.log("Enjoy the choc");
} else {
  console.log("You do not have enough money.. Sorry");
}

//more complex example..

let hour = 10;

if (hour >= 6 && hour <= 12) console.log("Serving Breakfast");
else if (hour > 12 && hour <= 14) console.log("serving lunch");
else console.log("Serving dinner");

// Switch case statements

let job = "Software Dev";

// if (job === "software Dev")
//     {
//         console.log('writes code');
//     } else if (job === "Designer" )
//         {
//             console.log("Designs things")
//         } else
//         console.log("Whats your job?");

switch (job) {
  case "Software Dev":
    console.log("Dev");
    break;
  case "Designer":
    console.log("Designer");
    break;
  case "Cloud Eng":
    console.log("Cloud eng");
    break;
  default:
    console.log("What is your joib?");
}

//for loop

let numbers = [1, 2, 3, 4, 5, 6, 7];

let index = 0;
let lengthOfArray = numbers.length;

//how to do wuithout for loop

// console.log(numbers[index++]);
// console.log(numbers[index++]);
// console.log(numbers[index++]);
// console.log(numbers[index++]);
// console.log(numbers[index++]);
// console.log(numbers[index++]);
//console.log(numbers[index++]);

for (
  let i = 0;
  /*initialization*/ i < numbers.length;
  /*conditional*/ i++ /*increment or decrement*/
) {
  console.log(numbers[i]); //this will print the numbers array values for each iteration of i, while i < numbers.length is true
}

for (let i = 0; i < 100; i++) {
  console.log(i);
}

// while loops

while (index < numbers.length) {
  console.log(numbers[index]);
  index++;
}

let sum = 0;

while (true) {
  console.log("Loop");
  sum++;

  if (sum === 10) break;
}

// do-while loops
// this will execute before a check is completed, so will always execute one, while a while loop check condition first
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 9);

// for in loop

const course = {
  name: "This is a course",
  duration: 3,
  sections: 8,
  whoFor: "beginnners",
};

for (const key in course) {
  console.log(course[key]);
}

// for of loops

let newNumber = [1, 2, 3, 4, 4, 4, 66, 7, 5, 4, 3, 3, 5, 5];

for (let element of newNumber) {
  console.log(element);
}

// break and ontinue in loops

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // essentially skip this iteration, move to next one
  }
  console.log(i);
}

let x = 0;

while (x < 10) {
  x++;
  if (x % 3 === 0) {
    continue;
  }
  console.log(x);
}

let bigNumber = makeMaxNumber(2, 4);

function makeMaxNumber(a, b) {
  result = a >= b ? a : b;
  console.log(result);
  return result;
}

// function fizzBuzz(number) {
//   switch (number) {
//     case number % 5 && number % 3:
//       return "FizzBuzz";
//       break;
//     case number % 3:
//       return "Fizz";
//       break;
//     case number % 5:
//       return "Buzz";
//     default:
//       return number;
//   }
// }

function FizzBuzz(number) {
  if (number % 5 === 0 && number % 3 === 0) {
    return "FizzBuzz";
  } else if (number % 5 === 0) {
    return "buzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  }
  return number;
}

console.log(FizzBuzz(10));

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function evenArray(array) {
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      continue;
    }
    console.log(array[i]);
  }
}

function oddArray(array) {
  for (let element of array) {
    if (element % 2 != 0) continue;
    console.log(element);
  }
}

evenArray(array);
oddArray(array);
