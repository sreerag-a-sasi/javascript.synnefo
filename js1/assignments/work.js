/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//single user

// Create a user object
const user = {
  username: "john_doe",
  email: "john@example.com",
  isAdmin: true,
};

// Check if the user is an administrator
if (user.isAdmin) {
  console.log(`User ${user.username} is an administrator.`);
} else {
  console.log(`User ${user.username} is not an administrator.`);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//multiple user

// Create an array of user objects
const users = [
  {
    username: "john_doe",
    email: "john@example.com",
    isAdmin: true,
  },
  {
    username: "jane_smith",
    email: "jane@example.com",
    isAdmin: false,
  },
];

// Loop through the users and log their information
users.forEach((user) => {
  if (user.isAdmin) {
    console.log(
      `User ${user.username} (email: ${user.email}) is an administrator.`
    );
  } else {
    console.log(
      `User ${user.username} (email: ${user.email}) is not an administrator.`
    );
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//inputing users

const userDataForm = document.getElementById("userDataForm");

userDataForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");

  // Get the entered values
  const name = nameInput.value;
  const email = emailInput.value;

  // You can process the data (e.g., send it to a server, store it in a database, etc.)
  console.log(`User entered: Name - ${name}, Email - ${email}`);
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//book sorting

// Create a JSON array of books
const books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publishedYear: 1960,
  },
  {
    title: "1984",
    author: "George Orwell",
    publishedYear: 1949,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    publishedYear: 1813,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedYear: 1925,
  },
];

// Function to filter books published after a certain year
function filterBooksByYear(books, year) {
  return books.filter((book) => book.publishedYear > year);
}

const yearToFilter = 1945;
const filteredBooks = filterBooksByYear(books, yearToFilter);

console.log(`Books published after ${yearToFilter}:`);
filteredBooks.forEach((book) => {
  console.log(`${book.title} by ${book.author} (${book.publishedYear})`);
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Prompt the user for a temperature in Celsius
// const temperatureInput = prompt("Enter the temperature in Celsius:");

// // Convert the input to a number
// const temperatureCelsius = parseFloat(temperatureInput);

// // Check if the input is a valid number
// if (isNaN(temperatureCelsius)) {
//   console.log("Invalid input. Please enter a valid number.");
// } else {
//   // Using if conditions
//   if (temperatureCelsius < 10) {
//     console.log("Cold");
//   } else if (temperatureCelsius >= 10 && temperatureCelsius < 30) {
//     console.log("Moderate");
//   } else {
//     console.log("Hot");
//   }

//   // Using switch statement
//   switch (true) {
//     case temperatureCelsius < 10:
//       console.log("Cold");
//       break;
//     case temperatureCelsius >= 10 && temperatureCelsius < 30:
//       console.log("Moderate");
//       break;
//     default:
//       console.log("Hot");
//       break;
//   }
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// JSON string representing a list of countries
const countriesJSON = `
[
  {
    "name": "United States",
    "population": 331002651,
    "capital": "Washington, D.C."
  },
  {
    "name": "China",
    "population": 1444216107,
    "capital": "Beijing"
  },
  {
    "name": "India",
    "population": 1380004385,
    "capital": "New Delhi"
  },
  {
    "name": "Brazil",
    "population": 212559417,
    "capital": "Brasília"
  }
]
`;

// Parse the JSON string
const countries = JSON.parse(countriesJSON);

// Find the country with the largest population
let largestPopulationCountry = countries[0];
countries.forEach((country) => {
  if (country.population > largestPopulationCountry.population) {
    largestPopulationCountry = country;
  }
});

// Log information about the country with the largest population
console.log(`Country with the largest population:`);
console.log(`Name: ${largestPopulationCountry.name}`);
console.log(`Population: ${largestPopulationCountry.population}`);
console.log(`Capital: ${largestPopulationCountry.capital}`);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Create an array of student objects
const students = [
  {
    name: "Alice",
    age: 20,
    grade: 85,
  },
  {
    name: "Bob",
    age: 22,
    grade: 78,
  },
  {
    name: "Charlie",
    age: 19,
    grade: 92,
  },
  // Add more student objects as needed
];

// Threshold for grade (e.g., students with grade above 80)
const gradeThreshold = 80;

// Filter students with grade above the threshold
const highGradeStudents = students.filter(
  (student) => student.grade > gradeThreshold
);

console.log("Students with grade above the threshold:");
highGradeStudents.forEach((student) => {
  console.log(`${student.name} (Grade: ${student.grade})`);
});

// Calculate the average age of all students
const totalAge = students.reduce((sum, student) => sum + student.age, 0);
const averageAge = totalAge / students.length;

console.log(`Average age of all students: ${averageAge.toFixed(2)} years`);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
