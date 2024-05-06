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
// * *
// * * *
// * * * *
// * * * * *
// * * * * * *
// * * * * * * *
// * * * * * * * *
// * * * * * * * * *
// * * * * * * * * * *
/////////////////////////////////////////////////////////////////////////////////////////////////
var str2 = "";

for (let i = 0; i <= 10; i++) {
  //nested for loop
  for (let j = 1; j <= i; j++) {
    str2 = str2 + j + " ";
  }
  str2 = str2 + "\n";
}
console.log(str2);

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4 5 6
// 1 2 3 4 5 6 7
// 1 2 3 4 5 6 7 8
// 1 2 3 4 5 6 7 8 9
// 1 2 3 4 5 6 7 8 9 10

//////////////////////////////////////////////////////////////////////////////////////////////////
var str4 = "";

for (let i = 0; i <= 10; i++) {
  //nested for loop
  for (let j = 1; j <= 10 - i; j++) {
    str4 = str4 + j + " ";
  }
  str4 = str4 + "\n";
}
console.log(str4);

// 1 2 3 4 5 6 7 8 9 10
// 1 2 3 4 5 6 7 8 9
// 1 2 3 4 5 6 7 8
// 1 2 3 4 5 6 7
// 1 2 3 4 5 6
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

/////////////////////////////////////////////////////////////////////////////////////////////////////
var str7 = "";
for (let i = 0; i <= 10; i++) {
  //nested for loop
  for (let k = 0; k <= 10 - i; k++) {
    str7 = str7 + " ";
  }
  for (let j = 0; j <= i; j++) {
    str7 = str7 + "* ";
  }
  str7 = str7 + "\n";
}
console.log(str7);

//           *
//          * *
//         * * *
//        * * * *
//       * * * * *
//      * * * * * *
//     * * * * * * *
//    * * * * * * * *
//   * * * * * * * * *
//  * * * * * * * * * *
// * * * * * * * * * * *

var str5 = "";

for (let i = 0; i <= 10; i++) {
  //nested for loop
  for (let j = 1; j <= 10 - i; j++) {
    str5 = str5 + "* ";
  }
  str5 = str5 + "\n";
}
console.log(str5);

// * * * * * * * * * *
// * * * * * * * * *
// * * * * * * * *
// * * * * * * *
// * * * * * *
// * * * * *
// * * * *
// * * *
// * *
// *

/////////////////////////////////////////////////////////////////////////////////////////////////////
{
  console.log("\n\n\n");

  //functions

  //(named functions)
  //function definition
  function printhello() {
    console.log("hello");
  }

  //function call
  printhello();
  let value = printhello();
  console.log("value : ", value);

  //function with return
  function sum() {
    let a = 10;
    let b = 20;
    let sum = a + b;

    return sum;
  }

  let result = sum();
  console.log("result : ", result);

  //function with parameter
  function add(a, b) {
    let sum = a + b;
    return sum;
  }

  let result1 = add(50, 150); //passing arguments
  console.log("result1 : ", result1);

  //anonymous functions
  let hai = function () {
    console.log("hai");
    return 1000;
  };

  let hairesult = hai();
  console.log("function hai returns : ", hairesult);

  //arrow function
  let printwelcome = () => {
    console.log("welcome !");
  };

  printwelcome();

  //callback function
  function printhaiworld(callback) {
    callback();
  }

  printhaiworld(function () {
    console.log("hai world !");
  });

  let a = 10;

  //call by value
  function update(a) {
    a = 100;
    console.log("value of a inside function : ", a);
  }

  update(a);
  console.log("a : ", a);

  let arr = [10, 20, 30];

  //call by reference
  function updatearr(arr) {
    arr[0] = 100;
    console.log("arr from inside the function :", arr);
    console.log("value of arr[0] inside function: ", arr[0]);
  }

  updatearr(arr);
  console.log("arr : ", arr);
}

{
  //closure (a function along with its environment)
  function outerfunction() {
    const outervariable = " from outer function";

    function innerfunction() {
      function innerfunction1() {
        console.log("outervariable : ", outervariable);
      }

      return innerfunction1;
    }

    return innerfunction;
  }

  // let innfun = function innerfunction(){
  //    console.log("outervariable : ",outervariable);
  // }

  let result = outerfunction();
  console.log("result : ", result);
  // console.log("innfun : ",innfun);

  let result1 = result();
  console.log("result : ", result1);

  result1();

  // result();
  // result1();
}

{
  //Dom Methods
  let password = document.getElementById("password");
  console.log("password : ", password);

  let passwordvalue = password.textContent;
  console.log("passwordvalue : ", passwordvalue);

  let mycars = document.getElementsByClassName("car");
  console.log("mycars : ", mycars);

  console.log("car1 : ", mycars[0]);
  console.log("car2 : ", mycars[1]);

  let heading = document.getElementsByTagName("h1");
  console.log("heading : ", heading);

  console.log("heading1 : ", heading[0]);
  console.log("heading2 : ", heading[1]);

  let box2row1 = document.querySelector(".container #box-1 .row");
  console.log("box2row1 : ", box2row1);

  let box2rows = document.querySelectorAll(".container #box-1 .row");
  console.log("box2rows : ", box2rows);
  console.log("box2row2 : ", box2rows[1]);
}

{
  //dom methods
  let btn = document.getElementById("btn");

  btn.addEventListener("click", () => {
    //alert("button clicked....");
    console.log("button clicked");
  });

  btn.addEventListener("mouseover", () => {
    console.log("mouseover event fired...");
  });

  btn.addEventListener("mouseout", () => {
    console.log("mouseout event fired...");
  });

  btn.addEventListener("mousedown", () => {
    console.log("mousedown event fired...");
  });

  btn.addEventListener("mouseup", () => {
    console.log("mouseup event fired...");
  });

  btn.addEventListener("mousemove", () => {
    console.log("mousemove event fired...");
  });

  let inp = document.getElementById("name");

  inp.addEventListener("keydown", () => {
    console.log("keydown event fired...");
  });

  inp.addEventListener("keyup", () => {
    console.log("keyup event fired...");
  });

  //math functions

  console.log(Math.sqrt(16)); //4
  console.log(Math.round(10.4)); //10
  console.log(Math.round(10.5)); //11
  console.log(Math.ceil(10.1)); //11
  console.log(Math.ceil(10.9)); //11
  console.log(Math.floor(10.1)); //10
  console.log(Math.floor(10.9)); //10
  console.log(Math.abs(-1)); //1
  console.log(Math.abs(+1)); //1
  console.log(Math.PI); //3.1415926...
  console.log(Math.max(10, 20)); //20
  console.log(Math.min(10, 20)); //10
  console.log(Math.pow(2, 3)); //(2^3)=8
  
}


