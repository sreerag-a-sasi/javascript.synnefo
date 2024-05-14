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

    constructor(name){
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



