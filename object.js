/**
Create an object with a name, rollNo as keys and give its respective values.
Add a new key address with a value and console log the whole object
as well as the new address key’s value
 */

//Creating the object student
let student = {
    name: `Hari Bahadur`,
    rollNo: 2504
}

//Adding a new key address
student.address = `Sydney`

//logging the whole object
console.log(student)

//logging the value of 'address' key
console.log(`Address: ${student.address}`)