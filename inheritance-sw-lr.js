// Story: As a programmer, I can make a car.
// Write a variable called myCar which is an instance of the class Car

// class myCar {
//     constructor(model, year, wheels)
//     {
//         this.model = model;
//         this.year = year;
//         this.wheels = wheels;

//         let myCar = new genericCar(Tesla)
//     }
// }
// console.log(genericCar)

class myCar{
    constructor (model,year){
        this.model = model
        this.model = year
    }
        wheels() {
            return this.wheels

        }
     }

class tesla extends myCar{
    constructor(model,year){
        super(model, year)
    }
    myTesla(){
        return this.year
    }
}

console.log(myCar.wheels())

// Story: As a programmer, I can give my car a model on initialization.
// The model for the car class can be "generic car"







// Story: As a programmer, I can give my car a year on initialization.
// The year for the car class can be "myCar year"