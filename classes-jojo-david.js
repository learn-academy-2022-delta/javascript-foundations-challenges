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
//   Write the code that makes a black coffee. Then write the code that outputs the coffee's profile.
 const coffeeType = new Coffee("black", 0, 0)
console.log(coffeeType) 
// Coffee { type: 'black', cream: 'none', sugar: 'none' }
coffeeType.coffeeProfile()
console.log(coffeeType.coffeeProfile())
// A black coffee with 0 cream, 0 sugar

//   Write the code that makes a coffee with 1 cream and 2 sugars. Then write the code that outputs the coffee's profile.
const coffeeType2 = new Coffee("black", 1, 2)
console.log(coffeeType2)
coffeeType.coffeeProfile()
console.log(coffeeType2.coffeeProfile())
// A black coffee with 1 cream, 2 sugars

//   ---Latte Maker
//   Write a Latte class that takes a flavor, a milk type and a number of shots.
class Latte {
    constructor(latteFlavor, latteMilk, latteNumberOfShots){
        this.flavor = latteFlavor
        this.milkType = latteMilk
        this.numberOfShots = latteNumberOfShots
    }
    latteProfile() {
        return `A latte with ${this.flavor}, ${this.milkType}, and ${this.numberOfShots}.`
    }
}

  
//   Write a method for your Latte class that outputs the latte's profile.
  
//   Write the code that makes a regular, single shot latte. Then, log the latte's profile.
  
//   Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.
const latteType = new Latte("hazelnut", "almond milk", "double shot")
console.log(latteType)
latteType.latteProfile()
console.log(latteType.latteProfile())
// A latte with hazelnut, almond milk, and double shot.
  
//   Volume of a Cylinder
//   Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)
  
//   Write the code that creates three unique cylinder objects