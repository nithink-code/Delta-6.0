// For reference in JS

// let arr1=[1,2,3,4];
// arr1.__proto__

// For actual object
// Array.prototype()

// To create Factory Function in JS [functions to create objects]
// function Person(name,age){
//     const obj1={
//         name: name,
//         age: age,
//         // Method
//         talk(){
//             console.log(`Hi my name is ${this.name}.`);
//         }

//     }
//     return obj1;
// }


// New Operator - Using Constructors

// function Person(name,age){
//     this.name = name,
//     this.age = age
// };

// To create a prototype of the above function
// Person.prototype.talk = function (){
//     console.log(`Your name is ${this.name}.`);
// }

// let p1 = new Person("Nithin",19);
// p1.talk();


// Classes Implementation

// Use of Inheritance

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Your name is ${this.name}.`);
    }
}

class Person1 extends Person{
    constructor(name,age,height){
        super(name,age);   // Used to inherit the parent class constructor 
        this.height = height;
    }
}

let p1 = new Person1("Nithin",19,46);
console.log(p1.name);
console.log(p1.age);
console.log(p1.height);

