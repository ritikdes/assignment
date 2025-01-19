/**
Showcase the array method .map() .filter()
 */

const numbers = [1, 5, 6, 8, 15, 12, 17, 50, 13]

const even = numbers.filter(function(number){
    return number % 2 == 0
})

const double = numbers.map(function(number){
    return 2 * number
})

console.log(`Even numbers: ${even}`)
console.log(`Doubled numbers: ${double}`)