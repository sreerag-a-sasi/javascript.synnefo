let x = 10;
const y = 20;
let z = y - x;
x = y + z;
console.log("x = ", x);

let greeting = "Hello";
if (greeting === "Hello") {
  console.log("Hi!");
} else {
  console.log("Goodbye!");
}

let num = 10;
let doubled = num * 2;
console.log(doubled);

let colors = ["red", "green", "blue"];
let favoriteColor = colors[2];
console.log("favoriteColor : ", favoriteColor);

function add(x, y) {
  return x + y;
}

let result = add(5);
console.log(add(x, y));

let person = {
  firstName: "John",
  lastName: "Doe",
  age: 22,
};

console.log(person.age);

let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i <= numbers.length; i++) {
  console.log(i);
}

function multiply(x, y) {
  return x * y;
}
console.log(multiply(x, y));

let product = multiply(3, "2");
console.log("Product:", product);

function greet(name) {
  return "Hello, " + name;
}

let username = "Alice";
console.log(greet(username));

let age = 30;
console.log("Age in 5 years:", age + 5);

let students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 96 },
  { name: "Charlie", grade: 92 },
];

for (let student of students) {
  if (student.grade >= 90) {
    console.log(student.name + " has an A grade.");
  }
}

console.log("End of the code");

/////////////////////////////////////////////////////////////////////////////////////////////////////

//string reverse
{
  //Using Built-in Functions: You can use the split, reverse, and join methods to reverse a string
  function reverseString(str) {
    return str.split("").reverse().join("");
  }

  const originalString = "synnefo solutions";
  const reversedString = reverseString(originalString);
  console.log(`Original: ${originalString}`);
  console.log(`Reversed: ${reversedString}`);
}
{
  //Using a Loop: You can manually reverse the string by iterating through its characters:
  function reverseStringLoop(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }

  const originalString = "synnefo solutions";
  const reversedString = reverseStringLoop(originalString);
  console.log(`Original: ${originalString}`);
  console.log(`Reversed: ${reversedString}`);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////

//string palindrome
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

// const originalString = prompt("give me a word!");
// const reversedString = reverseString(originalString);
// if (reversedString === originalString) {
//   console.log("the given word is a palindrome!");
// } else {
//   console.log("the given word is not a palindrome!");
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////

//fibonacci series

/////////////////////////////////////////////////////////////////////////////////////////////////////

//multiplication table
// {
//   var number = prompt("give me a number");
//   console.log(`Multiplication table for ${number} is :`);
//   for (let i = 1; i <= 10; i++) {
//     const result = number * i;
//     console.log(`${number} * ${i} = ${result}`);
//   }
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////

//time date print


//digital clock
//calculator
//assignment link 1
// array elements sum
// average of an array element
//minimum and  maximum value in an array
//change the negative value in an array to positive
//even numbers and odd numbers sum in an array
//sum of squres elements of an array
// index of the first even number using find methode in an array
//find even and odd number in an array using filter function
//make an array of double from an array using map function
//find the product of all positive numbers in an array using reduse method and avoid negative numbers
//
