// Story: As a programmer, I can make a car.
// Write a variable called myCar which is an instance of the class Car
// Story: As a programmer, I can give my car a model on initialization.
// The model for the car class can be "generic car"
// Story: As a programmer, I can give my car a year on initialization.
// The year for the car class can be "myCar year"
// Story: As a programmer, I can tell how many wheels myCar has.
// Calling the method wheels will return 4

class Car {
    constructor(model, year, speed) {
        this.model = model
        this.year = year
        this.speed = 0
    }

  

    wheels() {
        return 4
    }
    lights() {
        return "off"
    }
    signal() {
        return "off"
    }

    acceleration() {
        return this.speed
    }
    braking() {
        return this.speed
    }
    carInfo() {
        return `The information of the car is year: ${this.year}, model: ${this.model}, speed: ${this.speed}`
    }
}


// Story: As a programmer, I can make a Tesla car.
// class Tesla inherits from class Car

class Tesla extends Car {
    constructor(model, year) {
        super(model, year)
    }


    acceleration() {
        this.speed = this.speed + 10
    }
    braking() {
        this.speed = this.speed - 7
    }

}
// Create an object called myTesla which is a instance of class Tesla
// Story: As a programmer, I can give my Tesla a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Tesla a year on initialization.

var myTesla = new Tesla("Y", 2022)

console.log(myTesla)


// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
// Story: As a programmer, I can make a Toyota car.
// class Toyota inherits from class Car

class Toyota extends Car {
    constructor(model, year) {
        super(model,year)
    }

    acceleration() {
        this.speed = this.speed + 5
    }
    braking() {
        this.speed = this.speed - 2
    }
}
// create an object called myToyota which is a instance of class Toyota
// Story: As a programmer, I can give my Toyota a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Toyota a year on initialization.
var myToyota = new Toyota("corolla", 1994)
console.log(myToyota)

// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
// Story: As a programmer, I can make a Volkswagen car.
// class Volkswagen inherits from class Car
// create an object called myVolkswagen which is a instance of class Volkswagen
// Story: As a programmer, I can give my Volkswagen a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Volkswagen a year on initialization.

// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class

class Volkswagen extends Car {
    constructor(model, year) {
        super(model, year)
    }

    acceleration() {
        this.speed = this.speed + 7
    }
    braking() {
        this.speed = this.speed - 5
    }
}
var myVolkswagen = new Volkswagen("passat", 2015)

// Story: As a programmer, I can give all my cars a lights property. Lights start in the off position.

// Story: As a programmer, I can turn the lights in all my cars on and off.

// Story: As a programmer, I can give all my cars a signal property. Turn signal starts in the off position.

console.log(myVolkswagen.lights())

// Story: As a programmer, I can determine the speed of a car. Speed starts at 0 mph.

console.log(myTesla.speed)

// Story: As a programmer, I can speed my Tesla up by 10 per acceleration.

myTesla.acceleration()
console.log(myTesla.speed)
myTesla.braking()
console.log(myTesla.speed)

// Story: As a programmer, I can slow my Tesla down by 7 per braking.



// Story: As a programmer, I can speed my Toyota up by 5 per acceleration.

// Story: As a programmer, I can slow my Toyota down by 2 per braking.

// Story: As a programmer, I can speed my Volkswagen up by 7 per acceleration.

// Story: As a programmer, I can slow my Volkswagen down by 5 per braking.

// Story: As a programmer, I can call upon a carInfo method that will tell me all the information about a car.

// The method can be created in the parent class and accessed by all child classes


console.log(myTesla.carInfo())