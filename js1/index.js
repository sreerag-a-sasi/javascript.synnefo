//variables

var fruit; //variable diclaration
fruit = "apple"; //initialization
var price = 160; //variable declaration +initialization
console.log("fruit : ", fruit);
console.log("price : ", price);

//rules for declaring a variable
//must start with A-Z or a-z or _ or $
// after first letter we can use number
// javascript variables are case sensitieve (a and A is considered different)

//datatypes
var str = "this is a string";
console.log("str : ", str);
console.log("typeof(str) : ", typeof str);

var num = 10;
console.log("num : ", num);
console.log("typeof(num) : ", typeof num);

var bool = true;
console.log("bool : ", bool);
console.log("typeof(bool) : ", typeof bool);

var bool1 = false;
console.log("bool1 : ", bool1);
console.log("typeof(bool1) : ", typeof bool1);

var undef = undefined;
console.log("undef : ", undef);
console.log("typeof(undef) : ", typeof undef);

var n = null;
console.log("n : ", n);
console.log("typeof(n) : ", typeof n);

//string methods
var str1 = "Hello world";

console.log("str.length1", str1.length);
console.log("str1.toUppercase() :", str1.toUpperCase());
console.log("str1.toUppercase() :", str1.toLowerCase());
console.log(
  "str1.toUppercase().length :",
  str1.toUpperCase().toLowerCase().length
);

var trimmedString = str1.trim();
console.log("trimmedString : ", trimmedString);
console.log("str1.length : ", str1.length);
console.log("trimmedString.length : ", trimmedString.length);

var lefttrimmedString = str1.trimStart();
console.log("lefttrimmedString : ", lefttrimmedString);
console.log("str1.length : ", str1.length);
console.log("lefttrimmedString.length : ", lefttrimmedString.length);

var righttrimmedString = str1.trimEnd();
console.log("righttrimmedString : ", righttrimmedString);
console.log("str1.length : ", str1.length);
console.log("righttrimmedString.length : ", righttrimmedString.length);

var subStr = str1.substring(0, 3);
console.log("substr : ", subStr);

var replacedString = str1.replace("Hello", "hai");
console.log("replasedString : ", replacedString);

console.log("starts with hello or not : ", str1.startsWith("Hello"));

console.log("ends with world or not : ", str1.startsWith("world"));

var strToArr = str1.split(" ");
console.log("strToArr : ", strToArr);

var joinedToArr = strToArr.join(" ");
console.log("joinedArr : ", joinedToArr);

///arrays

var a = "John";
var arr = ["John", "Jane", "Robert", "David", "Mark", "Shanks"];
console.log("arr : ", arr);

console.log("typeof(arr) : ", typeof arr);

console.log("length : ", arr.join(" "));
console.log("index : ", arr.indexOf("Jane"));

arr.push("end");
console.log("arr", arr);

arr.unshift("fisrt");
console.log("arr", arr);

arr.pop();
console.log("arr", arr);

arr.shift();
console.log("arr", arr);

//replacing an element in an array

arr[0] = "John Doe";
console.log("arr", arr);

arr[1] = 40;
console.log("arr", arr);

//splice
arr.splice(0, 3);
console.log("arr", arr);

arr.splice(1, 0, "new");
console.log("arr", arr);

//object
var obj = {
  firstName: "john",
  lastName: "Doe",
  age: 10,
  canadian: false,
  address: {
    street: "MyStreet",
    city: "MyCity",
  },
  hobbies: ["Gaming", "Drawing", "Running"],
};

console.log("firstName : ", obj.firstName);
console.log("lastName : ", obj.lastName);
console.log("age : ", obj.age);
console.log("canadian : ", obj.canadian);
console.log("address : ", obj.address);
console.log("hobbies : ", obj.hobbies);

obj.age = 11;
console.log("age : ", obj.age);
obj.address.street = "MyStreet1";
console.log("street : ", obj.address.street);

//JSON

//obj to json
var json_obj = JSON.stringify(obj);
console.log("json_obj :", json_obj);

//parsing json
var parsed_json = JSON.parse(json_obj);
console.log("parsed_json :", parsed_json);

//window object (Global object)
console.log("window :", window);

console.log("z : ", z); //Hoisting

var z = 10; //global scoped variable
console.log("window :", window);
console.log("window : ", window.z);

console.log("z : ", z);

//block scoped

//var is not block scoped , it is global scoped
{
  var tree = "coconut";
  console.log("tree : ", tree);

  //can change values of var variables
  tree = "banyan";
  console.log("tree : ", tree);

  //var variables can be re-declared
  var tree;
  console.log("tree : ", tree);

  //var variables can be re-initialized
  var tree = "apple";
  console.log("tree : ", tree);

  //important points regarding var variables
  /*
    - corrupts window object
    - can be declared anywhere in a function
    - hoisted
    - supports multipple declaration in a scope
    - funtion scoped
    */
}

console.log("tree : ", tree);

//let is block scoped also it is not hoisted
{
  // console.log("color : ", color); //error!
  let color = "red";
  console.log("color : ", color);

  //can change value
  color = "yellow";
  console.log("color : ", color);

  //cannot be re-declared
  //let color; //error!

  //cannot be re-initialized
  // let color ="green";

  //important points
  /*
    -doesn't corrupt window object
    -declare before use
    -only one declaration in scope
    -block scoped
    */
}

//console.log("color : ",color);//error!

//const is block scoped and also it is not hoisted
{
  const car = "BMW"; //declaration and initialization must be done in single line

  //stricter than let
  //cannot change value once given
  //car = "benz"; //error!

  //cannot be re-declared or re-initialized
  //block-scoped
}

// console.log("car : ",car); //error!

///javascript conditions
{
  let isLoggedIn = true;

  if (isLoggedIn) {
    console.log("welcome ! you are logged in");
  } else {
    console.log("please login to continue...");
  }

  let num1 = 2000;
  let num2 = 2000;
  if (num1 > num2) {
    console.log(`${num1}is greater than ${num2}`);
  } else if (num1 < num2) {
    console.log(`${num1}is less than ${num2}`);
  } else {
    console.log(
      `the first number${num1} and the second number${num2}are equal`
    );
  }
}

//let day = prompt('enter a number : ');
//console.log("day : ",day);

//operators

//+,-,*,/,%,++,--,++var,var++,--var,var--
//&&,||,!
//=
//==,===,>,>=,<,<=

// let number1 = 1000;
// console.log("++number : ", ++number1); //

// let number2 = 2000;
// console.log("--number2 : ", --number2);

// let number3 = 3000;
// console.log("number3++ : ", number3++);

// let number4 = 4000;
// console.log("number4-- :", number4--);

// let bool11 = true;
// let bool12 = false;

// let result1 = bool1 && bool2;
// console.log("result1 : ", result1);

// let result2 = bool1 && bool2;
// console.log("result2 : ", result2);

// let result3 = bool1 && bool2;
// console.log("result3 : ", result3);

// let number5 = 10;
// let number6 = "10";

// console.log("number5 == number6 : ", number5 == number6);
// console.log("number5 === number6 : ", number5 === number6);

// //switch statement
// let month = Number(prompt("enter a month"));

// switch (month) {
//   case 1:
//     console.log("january");
//     break;
//   case 2:
//     console.log("february");
//     break;
//   case 3:
//     console.log("march");
//     break;
//   case 4:
//     console.log("april");
//     break;
//   case 5:
//     console.log("may");
//     break;
//   case 6:
//     console.log("june");
//     break;
//   case 7:
//     console.log("july");
//     break;
//   case 8:
//     console.log("august");
//     break;
//   case 9:
//     console.log("september");
//     break;
//   case 10:
//     console.log("october");
//     break;
//   case 11:
//     console.log("november");
//     break;
//   case 12:
//     console.log("desember");
//     break;
//   default:
//     console.log("invalid user entry!!");
//     break;
// }

{
  //loops
  // for(let i=0;i<10;i++){
  //     console.log(i);
  //     console.log("hello");
  // }

  //while loop
  // let i = 0;
  // while(i<10){
  //     console.log(i);
  //     console.log("hello from while");
  //     i++;
  // }

  //do while loop
  let i = 10;
  do {
    console.log(i);
    console.log("hello from do-while");
    i++;
  } while (i < 10);

  //break and continue
  for (let i = 0; i < 10; i++) {
    console.log(i);

    if (i == 5) {
      break;
    }

    if (i == 3) {
      continue;
    }

    console.log("hello");
  }
}

//nested loops
var str3 = "";
for (let i = 0; i <= 10; i++) {
  //nested for loop
  for (let j = 0; j < i; j++) {
    str3 = str3 + "* ";
  }
  str3 = str3 + "\n";
}
console.log(str3);
// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********
/////////////////////////////////////////////////////////////////////////////////////////////////
var str2 = "";

for (let i = 0; i <= 10; i++) {
  //nested for loop
  for (let j = 1; j <= i; j++) {
    str2 = str2 + j +' ';
  }
  str2 = str2 + "\n";
}
console.log(str2);

// 1
// 12
// 123
// 1234
// 12345
// 123456
// 1234567
// 12345678
// 123456789
// 12345678910

//////////////////////////////////////////////////////////////////////////////////////////////////
