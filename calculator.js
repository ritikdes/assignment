/*A program that creates a calculator function,
that takes two numbers and an operator (+, -, *, /) as argument
of the function and returns the result. Hint: switch()
*/

//calculator function that takes two numbers and an operator as an argument
function calculator(num1, num2, operator){
    let result;

    //switch case to check the operator inputted
    switch(operator){
        case '+':
            result = num1 + num2; //Adds two numbers
            break;
        case '-':
            result = num1 - num2; //Subtracts two numbers
            break;
        case '*':
            result = num1 * num2; //Multiplies two numbers
            break;
        case '/':
            //checks if the divisior is zero
            if (num2 == 0){
                return `Can't divide by zero!`
            }
            result = num1 / num2; //divides two numbers only if denominator is not zero
            break;
        default:
            return `Invalid Operator!`
    }
    return result;
}

// Example usage:
console.log(calculator(66, 15, '+')); // 15
console.log(calculator(220, 100, '-')); // 5
console.log(calculator(5, 12, '*')); // 50
console.log(calculator(20, 5, '/')); // 2
console.log(calculator(10, 0, '/')); // Error: Can't divide by zero!
console.log(calculator(10, 5, '^')); // Error: Invalid operator!