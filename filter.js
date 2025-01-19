/**
 Write a program that filters out even numbers
from an array and returns a new array with only the odd numbers.
Hint: filter()
 */

const num = [2,7,41,12,15,13,4,17,50]

const oddnum = num.filter(checkOdd)

function checkOdd(num){
    return num % 2 != 0
}
console.log(oddnum)