// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.

//const { describe } = require("yargs")

describe("areYouTired", () => {
    it("returns drink coffee or keep working based on input", () => {
      expect(areYouTired("yes")).toEqual("drink coffee")
      expect(areYouTired("no")).toEqual("keep working")
    })
  })
// ReferenceError: areYouTired is not defined

//Write the function that will make the test pass.
const areYouTired = (string) => {
    if(string === "yes"){
      return "drink coffee"
    } else if(string === "no") {
      return "keep working"
    }
  }

//Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
describe("areYouStressed", () => {
    it("returns relax or keep going based on input", () => {
      expect(areYouStressed("yes")).toEqual("relax")
      expect(areYouStressed("no")).toEqual("keep going")
    })
  })

//ReferenceError: areYouStressed is not defined
//Write the function that will make the test pass.
const areYouStressed = (string) => {
    if(string === "yes"){
      return "relax"
    } else if(string === "no") {
      return "keep going"
    }
  }

//Write the test for a function that returns "in budget" if a price is lower than $300.
//Input: yes
//Output: "in budget"
//Input: no
//Output: "more than 300"

describe("priceFilter", () => {
    it("returns in budget if a price is lower than $300", () => {
        let num = 100
      expect(priceFilter(num)).toEqual("in budget")
    })
  })

//Declare a function 
//Set parameters of string
//Use conditional to evaluate string
//return if yes or if not no

//ReferenceError: priceFilter is not defined

//Write the function that will make the test pass.

const priceFilter = (num) => {
    if(num < 300){
        return "in budget"
    } else if(num > 300){
        return "stop shopping"
    }

}
//Write the test for a function that takes in two arguments(numbers) and returns the smaller number.
//Input: num1, num2
//Output: smaller number (either num1 or num2)

describe("smallNumber", () => {
    let num1 = 2
    let num2 = 4
    it("returns the smaller number", () => {
        expect(2).toBeLessThan(4)
    })
})

//ReferenceError: smallNumber is not defined

//Write the function that will make the test pass.
const smallNumber = (num1, num2) => {
    if(num1 < num2){
        return "smaller number"
    }else if(num2 < num1){
        return "invalid"
    }
  }

