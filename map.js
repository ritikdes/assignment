/**
 Use map to create a new array 
 where each number in an array is doubled.
 map()
 */

 const numbers = [1, 2, 3, 4, 5, 6]

 const doubled = numbers.map(doubleNum)

 function doubleNum(number){
    return 2 * number
 }
 console.log(doubled)