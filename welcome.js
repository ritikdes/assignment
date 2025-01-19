/*
Write a function declaration, expression, and arrow function
that takes name as an argument and print Welcome {name} using template literals.
*/


//function declaration
function greeting(name){
    console.log(`Welcome ${name}`)
}
greeting("Ram")


//function expression
const greetings = function(name){
    console.log(`Welcome ${name}`)
}
greetings(`Hari`)


//arrow function
const greet = (name) => {
    console.log(`Welcome ${name}`)
}
greet("David")