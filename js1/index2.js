// let obj = {
//   name: "Harry",
//   age: 13,
//   mark: 100,
//   greeting: function () {
//     console.log(`Hai ${this.name}, your mark is ${this.mark}`);
//   },
// };

// console.log("name : ", obj.name);
// obj.greeting();

// //constructor function
// function Person(name, age, mark) {
//   this.name = name;
//   this.age = age;
//   this.mark = mark;

//   this.greeting = function () {
//     console.log(`hello ${this.name}, your mark is ${this.mark}`);
//   };
// }

// const person1 = new Person("john", 14, 99);
// console.log("person1 : ", person1);
// console.log("name : ", person1.name);
// person1.greeting();

// const person2 = new Person("jane", 15, 98);
// console.log("person2 : ", person2);
// console.log("name : ", person2.name);
// person2.greeting();

// person2.name = "loki";
// console.log("name : ", person2.name);

// person2.printHai = function () {
//   console.log(`Hai ${this.name}!!!!!!`);
// };

// person2.printHai();

// // person1.printHai();  //gets error!!

// Person.prototype.printHai = function () {
//   console.log(`Hai ${this.name} !!!!`);
// };

// person1.printHai();

//using classes

class Person {
  name;
  age;
  mark;

  constructor(name, age, mark) {
    this.name = name;
    this.age = age;
    this.mark = mark;
  }

  greeting() {
    console.log(`Hello ${this.name}, your mark is ${this.mark}`);
  }
}

let person1 = new Person("mike", 19, 50);
console.log("person1 : ", person1);

console.log("name : ", person1.name);
person1.greeting();

let person2 = new Person("Henry", 21, 52);
console.log("person2 : ", person2);

console.log("name : ", person2.name);
person2.greeting();

class Animal {
  name;

  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log(`Animal ${this.name} is walking...`);
  }
}

let myAnimal1 = new Animal("johny");
console.log("myAnimal1 : ", myAnimal1);
console.log("Animal name : ", myAnimal1.name);
myAnimal1.walk();

//inheritance
class Cat extends Animal {
  color;

  constructor(name, color) {
    super(name); //calls parents constructor
    this.color = color;
  }

  run() {
    console.log(`cat ${this.name} is running `);
  }

  //method overriding
  walk() {
    console.log(` ${this.color} Animal ${this.name} is walking... `);
  }
}

let myCat = new Cat("tom", "blue");
console.log("myCat : ", myCat);
console.log(" Cat name : ", myCat.name);
console.log("cat color : ", myCat.color);
myCat.walk();
myCat.run();

//setters and getters
class Car {
  name;
  color;

  constructor(name) {
    this.name = name;
  }

  set setcolor(color) {
    this.color = color;
  }

  get getcolor() {
    return this.color;
  }
}

let myCar = new Car("BMW");
console.log("car : ", myCar.name);

//myCar.setcolor("Green"); //without using setter
myCar.color = "Green"; //using setter

//let carColor = myCar.getColor(); //without using getter
let carColor = myCar.color; //using getter
console.log("carColor : ", carColor);
