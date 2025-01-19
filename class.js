/*
Create a Person class with properties name and age
A method introduce that logs a message 
like "Hi, my name is [name] and I am [age] years old.
*/

class Person{
    //constructor to initialize the properties 'name' and 'age'
    constructor(name, age){
        this.name = name
        this.age = age
    }

    //method to introduce that logs the message
    getNameAge(){
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`)
    }
}

//Creates a new object of Person class
const person1 = new Person("Ram", 20)
person1.getNameAge()