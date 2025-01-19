/**
Write a function that takes a string as input
and returns the number of characters in the string.
Given a string “Javascript is fun", write code to:
Convert it to uppercase.
Replace the word "fun" with "awesome".
Extract the substring "Script".
 */


let str = `Javascript is fun`
//function to return number of characters
function stringLength(strs){
    return str.length
}
console.log(`String length: ${stringLength(str)}`)

//Convert string to uppercase
let upperCase = str.toUpperCase()
console.log(`Uppercase: ${upperCase}`)

//Replace the word "fun" with "awesome"
let replace = str.replace('fun', 'awesome')
console.log(`Replaced sentence: ${replace}`)

//Extract the substring "Script"
let substring = str.substring(4, 10) //starting and ending index of 'script'
console.log(`Substring: ${substring}`)