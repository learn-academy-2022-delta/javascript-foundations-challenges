// Challenges
// 1. Story: As a programmer, I can make a car.
// 1a. Write a variable called myCar which is an instance of the class Car
class Car {
    constructor(make, model, year, light) {
      this.make = make
      this.model = model
      this.year = year
      this.light = light
    }
    wheelCount() {
      return this.wheels = 4
    }
    lightsControl() {
        if (this.light === "off"){
            return "off"
        } else if(this.light === "on"){
            return "on"
        }
    }
  }
var myCar = new Car ("Honda", "Civic", 2008)

// console.log(myCar.wheelCount())

// 2. Story: As a programmer, I can give my car a model on initialization.
// 2a. The model for the car class can be "generic car"
// 3. Story: As a programmer, I can give my car a year on initialization.
// 3a. The year for the car class can be "myCar year"
// console.log(myCar)

// 4. Story: As a programmer, I can tell how many wheels myCar has.
// 4a. Calling the method wheels will return 4
// console.log(myCar.wheelCount())

// 5. Story: As a programmer, I can make a Tesla car.
// 5a. class Tesla inherits from class Car
class Tesla extends Car {
    constructor(make, model, year) {
        super (make, model, year)
    }
}
var myTesla = new Tesla ("Tesla", "S", 2020)

// 6. Create an object called myTesla which is a instance of class Tesla
// 6a. Story: As a programmer, I can give my Tesla a model on initialization.
// 7. The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// 8. Story: As a programmer, I can give my Tesla a year on initialization.
// 8a. The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
var myTesla = new Tesla ("Tesla", "S", 2020)
// console.log(myTesla)

// 9. Story: As a programmer, I can make a Toyota car.
// 9a. class Toyota inherits from class Car
// create an object called myToyota which is a instance of class Toyota
// 9b. Story: As a programmer, I can give my Toyota a model on initialization.
// 9c. The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// 9d. Story: As a programmer, I can give my Toyota a year on initialization.
// 9e. The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
class Toyota extends Car {
    constructor (make, model, year) {
        super (make, model, year)
    }
}
var myToyota = new Toyota ("Toyota", "Rav4", 2021)
// console.log(myToyota)
// Story: As a programmer, I can make a Volkswagen car.
// class Volkswagen inherits from class Car
// create an object called myVolkswagen which is a instance of class Volkswagen
// Story: As a programmer, I can give my Volkswagen a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Volkswagen a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
class Volkswagen extends Car {
    constructor (make, model, year) {
        super (make, model, year)
    }
}
var myVw = new Volkswagen ("Volkswagen", "Bug", 2010)
// console.log(myVw)

// Story: As a programmer, I can give all my cars a lights property. Lights start in the off position.
// console.log(myCar, myCar.wheelCount())

// Story: As a programmer, I can turn the lights in all my cars on and off.
console.log(myCar, myCar.lightsControl("off"))

// Story: As a programmer, I can give all my cars a signal property. Turn signal starts in the off position.

// Story: As a programmer, I can determine the speed of a car. Speed starts at 0 mph.

// Story: As a programmer, I can speed my Tesla up by 10 per acceleration.

// Story: As a programmer, I can slow my Tesla down by 7 per braking.

// Story: As a programmer, I can speed my Toyota up by 5 per acceleration.

// Story: As a programmer, I can slow my Toyota down by 2 per braking.

// Story: As a programmer, I can speed my Volkswagen up by 7 per acceleration.

// Story: As a programmer, I can slow my Volkswagen down by 5 per braking.

// Story: As a programmer, I can call upon a carInfo method that will tell me all the information about a car.

// The method can be created in the parent class and accessed by all child classes
