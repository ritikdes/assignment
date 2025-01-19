/**
Given an array of colors const colors = ["red", "green", "blue"];
add yellow to this array, find the index of red, and console log the 2nd item.
 */

const colors = ["red", "green", "blue"]

//Adding 'yellow' to the array
colors.push('yellow')

//finding the index of red
const indexred = colors.indexOf('red')

//console logging the 2nd item
console.log(`Second Item: ${colors[1]}`)

console.log(`Index of red is ${indexred}`)
console.log(`The new array is:`)
console.log(colors)