// Coffee Maker
class Coffee {
  constructor(type, cream, sugar){
    this.type = type.toLowerCase()
    this.cream = cream
    this.sugar = sugar
  }

  coffeeProfile(){
    return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
  }

  creams(){
    if(this.cream > 1){
      return `${this.cream} creams`
    } else {
      return `${this.cream} cream`
    }
  }

  sugars(){
    if(this.sugar > 1){
      return `${this.sugar} sugars`
    } else {
      return `${this.sugar} sugar`
    }
  }
}
// Write the code that makes a black coffee. Then write the code that outputs the coffee's profile.

const blackCoffee = new Coffee ("black",0, 0)
console.log(blackCoffee.coffeeProfile())

// Write the code that makes a coffee with 1 cream and 2 sugars. Then write the code that outputs the coffee's profile.

const latte = new Coffee ("latte",1, 2)
console.log(latte.coffeeProfile())

// Latte Maker
// Write a Latte class that takes a flavor, a milk type and a number of shots.

class Latte {
    constructor(flavor, milkType, shots){
        this.flavor = flavor
        this.milkType= milkType
        this.shots = shots
    }
    latteProfile(){
        return `A ${this.flavor} latte with ${this.milkType} milk, ${this.shots} shots`
    }
}

// Write a method for your Latte class that outputs the latte's profile.

// Write the code that makes a regular, single shot latte. Then, log the latte's profile.

const newLatte = new Latte ("regular", "skim", 1)

console.log(newLatte.latteProfile())

// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.

const hazelnut = new Latte ("hazelnut", "almond", 2)

console.log(hazelnut.latteProfile())

// Volume of a Cylinder
// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)

class Cylinder {
    constructor(radius, height){
        this.radius = radius
        this.height = height
    }
    volume(){
        return (Math.PI * (this.radius * this.radius) * this.height).toFixed(4)
    }
}


// Write the code that creates three unique cylinder objects

const firstCylinder = new Cylinder (5,11.1)
console.log(firstCylinder.volume())

const secondCyl = new Cylinder (10,30)
console.log(secondCyl.volume())

const thirdCyl = new Cylinder (100,400)
console.log(thirdCyl.volume())