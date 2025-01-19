/*
 Write a function findMax that accepts an array of numbers
 And returns the maximum value. Hint: Math.max()
*/

//function that takes array as argument
function findMax(arr){
    let max = arr[0]
    for(let i=1; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return max
}

const numbers = [5,10,50,70,25,18]
console.log(`The maximum value in the array is`, findMax(numbers))