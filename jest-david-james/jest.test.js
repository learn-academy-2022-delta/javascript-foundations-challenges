//  Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
// Write the function that will make the test pass.
  describe("wantCoffee", () => {
   	it("returns drink coffee or keep working based on input", () => {
   	    expect(wantCoffee("yes")).toEqual("drink coffee")
   	    expect(wantCoffee("no")).toEqual("keep working")
     })
 })


  const wantCoffee = (string) => {
  	if(string === "yes") {
  	return "drink coffee"
  } else {
  	return "keep working"
      }
  }


//  Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
//  Write the function that will make the test pass.
 describe("chillPill", () => {
     it("returns relax or keep going based on input", () => {
         expect(chillPill("yes")).toEqual("relax")
         expect(chillPill("no")).toEqual("keep going")
    })
 })

  const chillPill = (string) => {
   	if(string === "yes") {
   	return "relax"
   } else {
   	return "keep going"
       }
   }
//  Write the test for a function that returns "in budget" if a price is lower than $300.
//  Write the function that will make the test pass.
 describe("inBudget", () => {
     it("returns in budget if price is lower than 300", () => {
         expect(inBudget("< 300")).toEqual("in budget")
         expect(inBudget("> 300")).toEqual("keep shopping")
    })
 })

 const inBudget = (string) => {
     if(string === "< 300" ) {
     return "in budget"
 } else {
     return "keep shopping"
     }
 } 
//  Write the test for a function that takes in two arguments(numbers) and returns the smaller number.
//  Write the function that will make the test pass.
 describe("inBudget", () => {
     it("returns in budget if price is lower than 300", () => {
         expect(inBudget("< 300")).toEqual("in budget")
         expect(inBudget("> 300")).toEqual("keep shopping")
    })
 })

//  Write the test for a function that takes in one argument(number) and returns whether the number is odd.
//  Write the function that will make the test pass.
 describe("oddNum", () => {
     it("returns if number is odd or not based on argument", () => {
         expect(oddNum(11)).toEqual("odd")
     
    })
 })

 const oddNum = (number) => {
     if(number % 2 === 1) {
     return "odd"
 } else {
     return "is even"
     }
 } 
 // Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
 // Write the function that will make the test pass.
 describe("fruitColor", () => {
     it("returns colors of fruit based on argument", () => {
         expect(fruitColor("banana")).toEqual("yellow")
         expect(fruitColor("apple")).toEqual("red")
         expect(fruitColor("grape")).toEqual("purple")
    })
 })

 const fruitColor = (string) => {
     if(string === "apple") {
     return "red"
 } else if (string === "banana") {
     return "yellow" 
 } else (string === "grape"); {
    return "purple" 
 }
 } 


//  Write the test for a function called rick that returns "Morty".
//  Write the function that will make the test pass.
 describe("rick", () => {
     it("returns Morty", () => {
         expect(rick("rick")).toEqual("Morty")
        })
 })

 const rick = (string) => {
     if(string === "rick") {
     return "Morty"
     }
 } 
//  Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
//   Write the function that will make the test pass.
  describe("greeter", () => {
     it("return greeting with name based on argument", () => {
         expect(greeter("name")).toEqual("Hi, name")
         })
  })

const greeter = (string) => {
    return `Hi, ${string}`
}
console.log(greeter("Alpha"))
//  Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
//  Write the function that will make the test pass.

 describe("oddOrEven", () => {
      it("returns if number is odd or even based on argument", () => {
          expect(oddOrEven(15)).toEqual("odd")
          expect(oddOrEven(210)).toEqual("even")
     })
  })

  const oddOrEven = (number) => {
          if(number % 2 === 1) {
          return "odd"
      } else {
          return "even"
     }
 }


//  Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
//  Write the function that will make the test pass.

//  Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
//  Write the function that will make the test pass.

//  Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
//  Write the function that will make the test pass.

//  Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'.
//  Write the function that will make the test pass.