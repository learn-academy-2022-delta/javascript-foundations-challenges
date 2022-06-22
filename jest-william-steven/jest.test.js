// 1a - Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.

// Input: "yes"
// Output: "drink coffee"

// Input: "no"
// Output: "keep working"

describe("areYouTired", () => {
    it("return drink coffee if you are tired and keep working if you are not tired",()=>{
        expect(areYouTired("yes")).toEqual("drink coffee")
        expect(areYouTired("no")).toEqual("keep working")
    })
})

//  ReferenceError: areYouTired is not defined

// 1b - Write the function that will make the test pass.

const areYouTired = (answer1) => {
    if (answer1 === "yes") {
        return "drink coffee"
    }   else {
        return "keep working"
    }
}

// 2a -  Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.

describe("areYouStressed", () => {
    it("relax if you are stressed and keep going if you are not stressed",()=>{
        expect(areYouStressed("yes")).toEqual("relax")
        expect(areYouStressed("no")).toEqual("keep going")
    })
})

// ReferenceError: areYouStressed is not defined

// 2b -  Write the function that will make the test pass.

const areYouStressed = (answer1) => {
    if (answer1 === "yes") {
        return "relax"
    }   else {
        return "keep going"
    }
}

// 3a - Write the test for a function that returns "in budget" if a price is lower than $300.

// Input: 
// Output: 

describe("lowerPrice", () => {
    it("in budget if a price is lower than $300",()=>{
        expect(lowerPrice(33)).toEqual("in budget")
        expect(lowerPrice(333)).toEqual("out of budget")
    })
})
// 3b - Write the function that will make the test pass.
const lowerPrice = (price) => {
    if(price < 300) {
        return "in budget"
    } else if (price > 300){
        return "out of budget"
    }
}

// 4a - Write the test for a function that takes in two arguments(numbers) and returns the smaller number.

// Input: 
// Output: 

// describe("littleGuy", () => {
//     it("returns the smaller number",()=>{
//         expect(littleGuy(39)).toEqual("the smaller number")
//         expect(littleGuy(125)).toEqual("the larger number")
//     })
// })

// 4b - Write the function that will make the test pass.
// const num1 = 125
// const num2 = 39
// const littleGuy = (num1,num2) => {
//     if (num1 < num2) {
//         return "the smaller number"
//     }   else if (num1 > num2) {
//         return "the larger number"
//     } 
// }
//console.log(littleGuy(num1,num2))


// 5a - Write the test for a function that takes in one argument(number) and returns whether the number is odd.

describe("odds", () => {
    it("returns whether the number is odd",()=>{
        expect(odds(41)).toEqual("the odd number")
        expect(odds(24)).toEqual("the even number")
    })
})

// 5b - Write the function that will make the test pass.

const odds = (numbers) => {
    if (numbers % 2!==0) {
        return "the odd number"
    } else {
        return "the even number"
    }
}

// 6a - Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.

// Input: "banana"
// Output: "yellow"

// Input: "apple"
// Output: "red"

// Input: "grape"
// Output: "purple"

describe("fruityColors", () => {
    it("returns yellow if the argument is banana, red if apple and purple if grape",()=>{
        expect(fruityColors("banana")).toEqual("yellow")
        expect(fruityColors("apple")).toEqual("red")
        expect(fruityColors("grape")).toEqual("purple")
    })
})
// 6b - Write the function that will make the test pass.

const fruityColors = (fruit) => {
    if (fruit === "banana") {
        return "yellow" 
    } else if (fruit === "apple") {
        return "red"
    } else if (fruit === "grape") {
        return "purple"
    }
}


// Write the test for a function called rick that returns "Morty".
// Write the function that will make the test pass.