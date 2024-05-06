// ARRAY WORKS..

var numbers = [1, 2, 3, 4, 5];
console.log("numbers : ", numbers); //1,2,3,4,5

//adding number 6 at the end of the given array
numbers.push(6);
console.log("numbers", numbers); //1,2,3,4,5,6

//removing the first element of the array
numbers.splice(0, 1);
console.log("numbers", numbers); //2,3,4,5,6

//finding the index of the number 4 in the array
console.log("index : ", numbers.indexOf(4)); //"2"

//checking if the given array is empty or not
if (numbers.length === 0) {
  console.log("The array is empty.");
} else {
  console.log("The array is not empty.");
}

// OBJECTS...

// creating an object named person with properties name,age, and city.

var person = {
  name: "sreerag",
  age: 21,
  city: "kanhangad",
};
console.log(person);

//updating the value of age property
person.age = 22;
console.log("age : ", person.age);
console.log(person);

//adding a property called gender to the person object
person.gender = "male";
console.log("gender : ", person.gender);
console.log(person);

//checking if the person object have a property called country
if (person.hasOwnProperty("country")) {
  console.log('The object has a "country" property.');
} else {
  console.log('The object does not have a "country" property.');
}

//creating an object named address
var address = {
  state: "kerala",
  country: "india",
};

//merging two independant objects
var person = { ...person, ...address };
console.log(person);

//JSON
var obj = {
  Name: "sreerag",
  age: 22,
  address: {
    street: "panamthode",
    city: "kanhangad",
  },
};

console.log("Name : ", obj.Name);
console.log("age : ", obj.age);
console.log("address : ", obj.address);

//obj to json
var json_obj = JSON.stringify(obj);
console.log("json_obj :", json_obj);

//parsing json
var parsed_json = JSON.parse(json_obj);
console.log("parsed_json :", parsed_json);

//adding a new property to the object
obj.height = 182;
console.log("height : ", obj.height);
console.log(obj);

//converting back to the json string
var json_obj = JSON.stringify(obj);
console.log("json_obj :", json_obj);

//simple calculator

// let num1 = Number(prompt("Enter the first number:"));
// let num2 = Number(prompt("Enter the second number:"));
// console.log("you have to enter a number according to (+,-,*,/)");
// let number = Number(prompt("Enter the number:"));
// console.log(`You entered: ${num1}, ${num2} and ${number}`);
// var result;
// switch (number) {
//   case 1:
//     result = num1 + num2;
//     console.log("result : ", result);
//     console.log(`The sum of ${num1} and ${num2} is ${result}.`);
//     break;
//   case 2:
//     result = num1 - num2;
//     console.log("result : ", result);
//     console.log(`The subtracted value of ${num1} and ${num2} is ${result}.`);
//     break;
//   case 3:
//     result = num1 * num2;
//     console.log("result : ", result);
//     console.log(`The multiplied value of ${num1} and ${num2} is ${result}.`);
//     break;
//   case 4:
//     result = num1 / num2;
//     console.log("result : ", result);
//     console.log(`The divided value of ${num1} and ${num2} is ${result}.`);
//     break;
// }

//checking a number is negative or positive or zero

// let value = Number(prompt("Enter the number:"));
// console.log(`You entered: ${value}`);

// if (value > 0) {
//   console.log(`${value} is positive`);
// } else if (value < 0) {
//   console.log(`${value} is negative`);
// } else {
//   console.log(`the number is zero!!!`);
// }

//checking whether the day is weekend or weekday

// let day = Number(prompt("Enter the number:"));
// console.log(`You entered: ${day}`);

// switch (day) {
//   case 1:
//     console.log("Monday is a weekday : ", day);
//     break;
//   case 2:
//     console.log("Tuesday is a weekday : ", day);
//     break;
//   case 3:
//     console.log("Wednesday is a weekday : ", day);
//     break;
//   case 4:
//     console.log("Thursday is a weekday : ", day);
//     break;
//   case 5:
//     console.log("Friday is a weekday : ", day);
//     break;
//   case 6:
//     console.log("Saturday is a weekend : ", day);
//     break;
//   case 7:
//     console.log("Sunday is a weekend : ", day);
//     break;
//   default:
//     console.log("you have entered the wrong number");
// }

// Create an array of car objects
const cars = [
  {
    make: "Toyota",
    model: "Corolla",
    year: 1985,
  },
  {
    make: "Ford",
    model: "Mustang",
    year: 2022,
  },
  {
    make: "Chevrolet",
    model: "Impala",
    year: 1978,
  },
  {
    make: "Honda",
    model: "Civic",
    year: 2005,
  },
];

// Function to check if the car is a classic
function checkCarType(carObj) {
  // const currentYear = new Date().getFullYear();
  if (carObj.year < 1990) {
    return "Classic car";
  } else {
    return "Modern car";
  }
}

// Log the car details and classification
cars.forEach((car) => {
  console.log(
    `The ${car.make} ${car.model} (${car.year}) is a ${checkCarType(car)}.`
  );
});
