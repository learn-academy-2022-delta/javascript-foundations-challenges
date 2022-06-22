// // IMPORTANT: Write the test FIRST, see it fail, then write the code to make it PASS.

// // IMPORTANT: You do not need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.

// // Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.

// //Input: "yes"
// //output: "drink coffee"

// //Input: "no"
// //Output: "keep working"

describe ("coffee", () => {
    it ("returns drink coffee if you are tired and keep working if you are not tired", () => {
        expect(coffee("yes")).toEqual("drink coffee")
        expect(coffee("no")).toEqual("keep working")
    })
})
// // ReferenceError: coffee is not defined
// // Write the function that will make the test pass.

const coffee = (string) => {
    if(string === "yes"){
        return "drink coffee"
    }else {
        return "keep working"
    }
}

// // Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.

// Input: "yes"
// Output: "relax"

//Input: "no"
//Output:"keep going"

describe ("stressTest", () => {
    it ("returns relax if you are stressed and keep going if you are not stressed", () => {
        expect(stressTest("yes")).toEqual("relax")
        expect(stressTest("no")).toEqual("keep going")
    })
})

// // ReferenceError: stressTest is not defined
// // Write the function that will make the test pass.

const stressTest = (string) => {
    if(string === "yes"){
        return "relax"
    }else {
        return "keep going"
    }
}

// // Write the test for a function that returns "in budget" if a price is lower than $300.

//Input:300
//Output:"in budget"

//Input:400
//Output:"out of budget"

describe("shopping", () => {
    it("returns in budget if a price is lower than $300", () => {
        expect(shopping(300)).toEqual("in budget")
        expect(shopping(400)).toEqual("out of budget")
    })
})
// // ReferenceError: shopping is not defined
// // Write the function that will make the test pass.

const shopping = (price) => {
    if(price <= 300){
        return "in budget"
    } else if ( price > 300){
        return "out of budget"
    }
}

// // Write the test for a function that takes in two arguments(numbers) and returns the smaller number.

// //Input: 10, 20
// //Output: 10

describe("smallest", () => {
    it("takes in two arguments(numbers) and returns the smaller number", () => {
        expect(smallest(10,20)).toEqual(10)
    })
})

// ReferenceError: smallest is not defined
// Write the function that will make the test pass.
newArray = [10, 20]

const smallest = (newArray) => { 
    return Math.min(newArray)
}


// Write the test for a function that takes in one argument(number) and returns whether the number is odd.

//Input:11,18
//Output:odd, even

describe("oddEnough", () => {
    it("takes in one argument(number) and returns whether the number is odd", () => {
        expect(oddEnough(11)).toEqual("odd")
        expect(oddEnough(18)).toEqual("even")
    })
} )
//ReferenceError: oddEnough is not defined
// Write the function that will make the test pass.

const oddEnough = (value) => {
    if(value % 2 === 1){
        return "odd"
    }else{
        return "even"
    }
}

// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.

//Input:banana; apple ; grape
//Output:yellow; red ; purple

describe("fruity", () => {
    it("takes in a fruit and returns yellow if the argument is banana, red if apple and purple if grape", () => {
        expect(fruity("banana")).toEqual("yellow")
        expect(fruity("apple")).toEqual("red")
        expect(fruity("grape")).toEqual("purple")
    })
} )
//ReferenceError: fruity is not defined
// Write the function that will make the test pass.

const fruity = (fruit) => {
    if(fruit === "banana"){
        return "yellow"
    }else if( fruit === "apple"){
        return "red"
    }else if( fruit === "grape"){
        return "purple"
    }else {
        "eat your vegetables!"
    }
}

// Write the test for a function called rick that returns "Morty".

//Input: "rick"
//Output: "Morty"

describe("jerry", () => {
    it("returns Morty", () => {
        expect(jerry("rick")).toEqual("Morty")
        expect(jerry("scooby")).toEqual("wrong show!")
    })
})
// ReferenceError: jerry is not defined
// Write the function that will make the test pass.

const jerry = (string) => {
    if(string === "rick"){
        return "Morty"
    }else{
        return 'wrong show!'
    }
}

// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.

//Input: Leo ; Gene
//Output: Coding is hard Leo ; Coding is hard Gene

describe("greeter", () => {
    it("takes a name as an argument and returns a greeting with that name to the screen", () => {
        expect(greeter("Leo")).toEqual("Coding is hard Leo")
        expect(greeter("Gene")).toEqual("Coding is hard Gene")
    })
})

// Write the function that will make the test pass.

const greeter = (names) => {
    return `Coding is hard ${names}`
}

// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
// Write the function that will make the test pass.
// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
// Write the function that will make the test pass.
// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
// Write the function that will make the test pass.
// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// Write the function that will make the test pass.
// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'.
// Write the function that will make the test pass.