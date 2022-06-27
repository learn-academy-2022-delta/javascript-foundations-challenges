// Story: As a programmer, I can make a car.
// Write a variable called myCar which is an instance of the class Car

class Car {
    constructor() {
        this.carModel = "generic car"
        this.carYear = "myCar year"
        this.lights = "off"
        this.turnSignals = "off"
        this.speed = 0;
    }

    wheels() {
        return 4;
    }

    lightsOff() {
        this.lights = "off"
    }

    lightsOn() {
        this.lights = "on"
    }

    turnSignalsOff() {
        this.turnSignals = "off"
    }

    turnSignalsOn() {
        this.turnSignals = "on"
    }

    acceleration(number) {
        this.speed = this.speed + number
    }

    braking(number) {
        this.speed = this.speed - number
    }

    carInfo() {
        return `The car model is a ${this.carModel}. The year of the car is ${this.carYear}.`
    }
    
}

let myCar = new Car()

class Tesla extends Car {
    constructor() {
        super()
    }
}

let myTesla = new Tesla()
console.log(myTesla)

class Toyota extends Car {
    constructor() {
        super()
    }
}

let myToyota = new Toyota()
console.log(myToyota)

class Volkswagen extends Car {
    constructor() {
        super()
    }
}

let myVolkswagen = new Volkswagen()
console.log(myVolkswagen)

// Story: As a programmer, I can give my car a model on initialization.
// The model for the car class can be "generic car"
// good

// Story: As a programmer, I can give my car a year on initialization.
// The year for the car class can be "myCar year"
// good

// Story: As a programmer, I can tell how many wheels myCar has.
// Calling the method wheels will return 4
// good

// Story: As a programmer, I can make a Tesla car.
// class Tesla inherits from class Car
// Create an object called myTesla which is a instance of class Tesla
// good


// Story: As a programmer, I can give my Tesla a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// good


// Story: As a programmer, I can give my Tesla a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
// good

// Story: As a programmer, I can make a Toyota car.
// class Toyota inherits from class Car
// create an object called myToyota which is a instance of class Toyota
// good

// Story: As a programmer, I can give my Toyota a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// good

// Story: As a programmer, I can give my Toyota a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
// good

// Story: As a programmer, I can make a Volkswagen car.
// class Volkswagen inherits from class Car
// create an object called myVolkswagen which is a instance of class Volkswagen
// good

// Story: As a programmer, I can give my Volkswagen a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// good

// Story: As a programmer, I can give my Volkswagen a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
// good

// Story: As a programmer, I can give all my cars a lights property. Lights start in the off position.

console.log(myCar)
myCar.lightsOn()
console.log("lights: ", myCar.lights) // lights:  on
myCar.lightsOff()
console.log("lights: ", myCar.lights) // lights:  off

// Story: As a programmer, I can turn the lights in all my cars on and off.
// good

// Story: As a programmer, I can give all my cars a signal property. Turn signal starts in the off position.

console.log(myCar)
myCar.turnSignalsOn()
console.log("turn signals: ", myCar.turnSignals)
myCar.turnSignalsOff()
console.log("turn signals: ", myCar.turnSignals)

// Story: As a programmer, I can determine the speed of a car. Speed starts at 0 mph.

// Story: As a programmer, I can speed my Tesla up by 10 per acceleration.
console.log(myTesla)
myTesla.acceleration(100)
console.log("Acceleration: ", myTesla.speed)

// Story: As a programmer, I can slow my Tesla down by 7 per braking.
console.log(myTesla)
myTesla.braking(7)
console.log("Braking: ", myTesla.speed)


// Story: As a programmer, I can speed my Toyota up by 5 per acceleration.
console.log(myToyota)
myToyota.acceleration(5)
console.log("Acceleration: ", myToyota.speed)

// Story: As a programmer, I can slow my Toyota down by 2 per braking.
console.log(myToyota)
myToyota.braking(2)
console.log("Braking: ", myToyota.speed)

// Story: As a programmer, I can speed my Volkswagen up by 7 per acceleration.
console.log(myVolkswagen)
myVolkswagen.acceleration(7)
console.log("Acceleration: ", myVolkswagen.speed)

// Story: As a programmer, I can slow my Volkswagen down by 5 per braking.
console.log(myVolkswagen)
myVolkswagen.braking(5)
console.log("Braking: ", myVolkswagen.speed)

// Story: As a programmer, I can call upon a carInfo method that will tell me all the information about a car.
console.log(myToyota.carInfo())

console.log(myToyota)

// The method can be created in the parent class and accessed by all child classes
