// Challenges
class Car{
    constructor(model,year){
        this.model = model
        this.year = year
        this.wheel = this.wheels()
        this.light = "off"
        this.signal = "off"
        this.speed = 0
        
    }

    wheels(){
        return this.wheel = "wheels:" + 4
    }

    lightOn(){
       return this.light = "on"
    }
    lightOff(){
        return this.light ="off"
    }
    signalOn(){
        return this.signal = "on"
    }
    signalOff(){
        return this.signal = "off"
    }
    acceleration(){
        return this.speed
    }
    braking(){
        return this.speed
    }
   
    carProfile(){
        return `The car is a ${this.year} ${this.model} traveling at ${this.speed} mph`
    }

}
    


// Story: As a programmer, I can make a car.
// Write a variable called myCar which is an instance of the class Car
// Story: As a programmer, I can give my car a model on initialization.
// The model for the car class can be "generic car"
// Story: As a programmer, I can give my car a year on initialization.
// The year for the car class can be "myCar year"
// Story: As a programmer, I can tell how many wheels myCar has.
// Calling the method wheels will return 4
var myCar = new Car('generic car',2017)





// Story: As a programmer, I can make a Tesla car.
// class Tesla inherits from class Car
class Tesla extends Car{
    constructor(model,year){
        super(model,year)
    }
    
    acceleration(){
        return this.speed = this.speed + 10
    }
    braking(){
        return this.speed = this.speed - 7
    }
    


}

// Create an object called myTesla which is a instance of class Tesla
// Story: As a programmer, I can give my Tesla a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Tesla a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class

var myTesla = new Tesla("model s", 2022)
// console.log( myTesla)
// Story: As a programmer, I can make a Toyota car.
// class Toyota inherits from class Car
// create an object called myToyota which is a instance of class Toyota
// Story: As a programmer, I can give my Toyota a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Toyota a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
class Toyota extends Car{
    constructor(model,year){
        super(model,year)
    }

    acceleration(){
        return this.speed = this.speed + 5
    }
    braking(){
        return this.speed = this.speed - 2
    }
}

var myToyota = new Toyota("Tacoma",2019)
// console.log(myToyota)

// Story: As a programmer, I can make a Volkswagen car.
// class Volkswagen inherits from class Car
// create an object called myVolkswagen which is a instance of class Volkswagen
// Story: As a programmer, I can give my Volkswagen a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Volkswagen a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
// Story: As a programmer, I can give all my cars a lights property. Lights start in the off position.
class Volkswagon extends Car{
    constructor(model,year){
        super(model,year)
    }

    acceleration(){
        return this.speed = this.speed + 7
    }
    braking(){
        return this.speed = this.speed - 5
    }
}

var myVolkswagon = new Volkswagon("bug", 1990)
 


// Story: As a programmer, I can turn the lights in all my cars on and off.

// places all cars in an array
let cars = [myCar,myTesla,myToyota,myVolkswagon]

// calls the on function to turn on all the car lights
// const lightOn = (array) => array.map(value => value.lightOn())
// const lightOff = (array) => array.map(value => value.lightOff())

// adds light on to classes
// lightOn(cars)

// displays all cars objects with lights on in terminal
// console.log(cars)

// turns off all the lights in the terminal
// lightOff(cars)

// displays all car objects with lights off in terminal
// console.log(cars)


// Story: As a programmer, I can give all my cars a signal property. Turn signal starts in the off position.
// const signalOn = (array) => array.map(value => value.signalOn())
// const signalOff = (array) => array.map(value => value.signalOff())
// signalOn(cars)
// console.log(cars)
// signalOff(cars)
// console.log(cars)


// Story: As a programmer, I can determine the speed of a car. Speed starts at 0 mph.

// ------Speed is set to 0 in Car class -------
// All speed challenges below answered  

// Story: As a programmer, I can speed my Tesla up by 10 per acceleration.
// Story: As a programmer, I can slow my Tesla down by 7 per braking.
// Story: As a programmer, I can speed my Toyota up by 5 per acceleration.
// Story: As a programmer, I can slow my Toyota down by 2 per braking.
// Story: As a programmer, I can speed my Volkswagen up by 7 per acceleration.
// Story: As a programmer, I can slow my Volkswagen down by 5 per braking.
console.log(myTesla.carProfile())


// Story: As a programmer, I can call upon a carInfo method that will tell me all the information about a car.

// The method can be created in the parent class and accessed by all child classes