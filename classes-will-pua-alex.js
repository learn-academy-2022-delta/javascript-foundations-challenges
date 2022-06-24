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

let blackCoffee = new Coffee("black", "no", "no")
console.log(blackCoffee.coffeeProfile())


// Write the code that makes a coffee with 1 cream and 2 sugars. Then write the code that outputs the coffee's profile.

let sweetCoffee = new Coffee("medium", 1, 2)
console.log(sweetCoffee.coffeeProfile())

// Latte Maker
// Write a Latte class that takes a flavor, a milk type and a number of shots.

class LatteMaker {
    constructor(latteFlavor, latteMilk, latteShots){
    this.flavor = latteFlavor
    this.milk = latteMilk
    this.shots = latteShots
    }

    latteProfile() {
        return `A ${this.flavor} latte with ${this.milk} milk and ${this.shots} shot of espresso.`
    }


}

// Write a method for your Latte class that outputs the latte's profile.

// Write the code that makes a regular, single shot latte. Then, log the latte's profile.

let regularLatte = new LatteMaker("regular", "almond", 1)
console.log(regularLatte.latteProfile())


// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.

let hazelnutLatte = new LatteMaker("Hazelnut", "Almond", "double")
console.log(hazelnutLatte.latteProfile())

// Volume of a Cylinder
// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)

class VolumeCal {
    constructor(radius, height) {
        this.radius = radius
        this.height = height
    }

    calculateVolume() {
        return (3.14 * (this.radius ** 2) * this.height).toFixed(4)
    }
    
}

// Write the code that creates three unique cylinder objects

let cylinder1 = new VolumeCal(1, 5)
console.log(cylinder1.calculateVolume())

let cylinder2 = new VolumeCal(2, 6)
let cylinder3 = new VolumeCal(3, 7)



