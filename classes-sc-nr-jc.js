// 1. Coffee Maker
// class Coffee {
//   constructor(type, cream, sugar){
//     this.type = type.toLowerCase()
//     this.cream = cream
//     this.sugar = sugar
//   }

//   coffeeProfile(){
//     return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
//   }

//   creams(){
//     if(this.cream > 1){
//       return `${this.cream} creams`
//     } else {
//       return `${this.cream} cream`
//     }
//   }

//   sugars(){
//     if(this.sugar > 1){
//       return `${this.sugar} sugars`
//     } else {
//       return `${this.sugar} sugar`
//     }
//   }
// }
// 1a -  Write the code that makes a black coffee. Then write the code that outputs the coffee's profile.

// let blackCoffee = new Coffee ("black coffee") 
// console.log(blackCoffee) //Coffee { type: 'black coffee', cream: undefined, sugar: undefined }

// 1b - Write the code that makes a coffee with 1 cream and 2 sugars. Then write the code that outputs the coffee's profile.

// let sweetCoffee = new Coffee ("coffee", 1, 2) 
// console.log(sweetCoffee) //Coffee { type: 'coffee', cream: 1, sugar: 2 }

// 2. Latte Maker

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


// 2a - Write a Latte class that takes a flavor, a milk type and a number of shots.

class Latte {
    constructor (flavor, milkType, numberOfShots, size){
        this.flavor = flavor
        this.milkType = milkType
        this.numberOfShots = numberOfShots 
        this.size = size
       
    }
    // coffeeProfile(){
    //     return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
    //   }
    latteProfile(){
        return `Here is a ${this.flavor} latte with ${this.milkType}, ${this.numberOfShots} shot(s).`
      }

}
let deliciousLatte = new Latte("regular", 1)
console.log(deliciousLatte.latteProfile())

// 2b -  Write a method for your Latte class that outputs the latte's profile.


// ** Code used for the answer to 2b - found ABOVE ** 

// latteProfile(){
//     return `Here is ${this.flavor} latte with ${this.milkType}, ${this.numberOfShots} shot(s).`
// //   }

// 2c -  Write the code that makes a regular, single shot latte. Then, log the latte's profile.

// Latte {
//     size: 'regular',
//     flavor: 1,
//     milkType: undefined,
//     numberOfShots: undefined

// Output in String Before "Size" was moved AGAIN ha: Here is a regular latte with 1, undefined shot(s).

// 2d - Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.

let hazelLatte = new Latte("hazelnut", "almond", 2)
console.log(hazelLatte.latteProfile())

// Here is a hazelnut latte with almond, 2 shot(s).
