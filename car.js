/*
Create an object car with properties brand, model,
 and a method getDetails that returns "This car is a [brand] [model]".
 Use this inside the method
*/

class Car{
    constructor(brand, model){
        this.brand = brand
        this.model = model
    }
    getDetails() {
        return `This car is a ${this.brand} ${this.model}`
    }
}
const car = new Car(`Toyota`,`Corolla`)
console.log(car.getDetails())