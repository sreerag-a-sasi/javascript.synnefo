let obj = {
    name :"Harry",
    age:13,
    mark : 100,
    greeting : function (){
        console.log(`Hai ${this.name}, your mark is ${this.mark}`);
    }
}

console.log("name : ",obj.name);
obj.greeting();

//constructor function
function Person(name,age,mark) {
    this.name = name;
    this.age = age;
    this.mark = mark;

    this.greeting = function() {
        console.log(`hello ${this.name}, your mark is ${this.mark}`);
    }
}

const person1=new Person("john",14,99);
console.log("person1 : ", person1);
console.log("name : ",person1.name);
person1.greeting();

const person2=new Person("jane",15,98);
console.log("person2 : ", person2);
console.log("name : ",person2.name);
person2.greeting();

person2.name = "loki";
console.log("name : ",person2.name);

person2.printHai = function () {
    console.log(`Hai ${this.name}!!!!!!`);
}

person2.printHai();

// person1.printHai();  //gets error!!

Person.prototype.printHai = function () {
    console.log(`Hai ${this.name} !!!!`);
}

person1.printHai();