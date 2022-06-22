
// 1. Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
// Write the function that will make the test pass.

//input: are you tired yes or no
//output: if yes drink coffee, if no keep working
describe("drinkCoffee", () => {
    it("returns drink coffee if you are tired or keep working if you are not", () => {
    expect(drinkCoffee("yes")).toEqual("drink coffee")
    expect(drinkCoffee("no")).toEqual("keep working then")
    })
})
// ReferenceError: drinkCoffee is not defined

const drinkCoffee = (string) => {
    if(string === "yes"){
        return "drink coffee"
    } else if(string === "no"){
        return "keep working then"
    }
}


// 2. Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
// Write the function that will make the test pass.

//input: are you relaxed or stressed
//output: if yes return relax, if no return keep going

describe("youRelaxed", () => {
    it("returns relax if you are stressed and keep going if you are not", () => {
        expect(youRelaxed("yes")).toEqual("relax")
        expect(youRelaxed("no")).toEqual("keep going")
    })
})

// ReferenceError: youRelaxed is not defined

const youRelaxed = (string) => {
    if(string === "yes"){
        return "relax"
    } else if(string === "no"){
            return "keep going"
        }
    }


    // 3. Write the test for a function that returns "in budget" if a price is lower than $300.
    // Write the function that will make the test pass.

    //input: none
    //output: if price is less than 300 return "in budget"
    

describe("inBudget", () => {
    it("returns in budget if a price is lower than $300", () => {
        expect(1).toBeLessThan(2)
    })
})

const inBudget = (number) => {
    if(number < 300) {
        return "in budget"
    }
}

// 4. Write the test for a function that takes in two arguments(numbers) and returns the smaller number.
// Write the function that will make the test pass.

describe("smallerNum", () => {
    it("returns the smaller number of the two", () => {
        expect(1).toBeLessThan(2)
    })
})

var num1
var num2
const smallerNum = (number) => {
    if(num1 < num2){
    return num1 
    } else if(num1 > num2){
        return num2
    }
}


// 5. Write the test for a function that takes in one argument(number) and returns whether the number is odd.
// Write the function that will make the test pass.


describe("isOdd", () => {
    it("returns whether the number is odd", () => {
        expect(isOdd).toEqual("odd");
    })
})

// ReferenceError: isOdd is not defined

const isOdd = (number) => {
    return number % 2 !== 1;
 }

