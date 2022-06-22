// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
// Write the function that will make the test pass.

// Input: "yes"
// Output: "drink coffee"

// Input: "no"
// Output: "keep working"

describe("tiredOrNot", () => {
    it("returns drink coffee if you are tired and keep working if you are not tired.", () => {
        expect(tiredOrNot("yes")).toEqual("drink coffee")
        expect(tiredOrNot("no")).toEqual("keep working")
    })
})
//     ReferenceError: tiredOrNot is not defined

const tiredOrNot = (string) => {
    if(string === "yes") {
        return "drink coffee"
    } else {
        return "keep working"
    }
}

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
// Write the function that will make the test pass.

// Input: "yes"
// Output: "relax"

// Input: "no"
// Output: "keep going"

describe("stressTest", () => {
    it("returns relax if you are stressed and keep going if you are not stressed.", () => {
        expect(stressTest("yes")).toEqual("relax")
        expect(stressTest("no")).toEqual("keep going")
    })
})

const stressTest = (string) => {
    if(string === "yes") {
        return "relax"
    } else {
        return "keep going"
    }
}
 
// Write the test for a function that returns "in budget" if a price is lower than $300.
// Write the function that will make the test pass.

// Input: 250
// Output: "in budget"

// Input: 350
// Output: "not in budget"

describe("inBudgetOrNot", () => {
    it("returns in budget if a price is lower than $300.", () => {
        expect(inBudgetOrNot(250)).toEqual("in budget")
        expect(inBudgetOrNot(350)).toEqual("not in budget")
    })
})

const inBudgetOrNot = (number) => {
    if(number < 300) {
        return "in budget"
    } else {
        return "not in budget"
    }
}

// Write the test for a function that takes in two arguments(numbers) and returns the smaller number.
// Write the function that will make the test pass.

// Input: 2, 4
// Output: 2

describe("numTest", () => {
    const smallNumber = 2
    const bigNumber = 4
    it("takes in two arguments(numbers) and returns the smaller number.", () => {
        expect(numTest(smallNumber, bigNumber)).toEqual(smallNumber)
    })
})

const numTest = (smallNumber, bigNumber) => {
    if(smallNumber < bigNumber) {
        return smallNumber
    } else {
        return bigNumber
    }
}


// Write the test for a function that takes in one argument(number) and returns whether the number is odd.
// Write the function that will make the test pass.

Input: 5
Output: "odd"

Input: 6
Output: "not an odd"

describe("oddOrNot", () => {
    it("takes in one argument(number) and returns whether the number is odd.", () => {
        expect(oddOrNot(5)).toEqual("odd")
        expect(oddOrNot(6)).toEqual("not an odd")
    })
})

const oddOrNot = (number) => {
    if(number % 2 !== 0) {
        return "odd"
    } else {
        return "not an odd"
    }
}

// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
// Write the function that will make the test pass.

Input: "banana"
Output: "yellow"

Input: "apple"
Output: "red"

Input: "grape"
Output: "purple"

describe("fruitColor", () => {
    it("function that takes in a fruit and returns yellow if the argument is banana, red if apple and purple if grape.", () => {
        expect(fruitColor("banana")).toEqual("yellow")
        expect(fruitColor("apple")).toEqual("red")
        expect(fruitColor("grape")).toEqual("purple")
    })
})

const fruitColor = (fruit) => {
    if(fruit === "banana") {
        return "yellow"
    } else if(fruit === "apple"){
        return "red"
    } else if(fruit === "grape") {
        return "purple"
    } else {
        return "Try again"
    }
}

// Write the test for a function called rick that returns "Morty".
// Write the function that will make the test pass.

// Input: "rick"
// Output: "Morty"

describe("rickAndMorty", () => {
    it("test for a function called rick that returns Morty", () => {
        expect(rickAndMorty("rick")).toEqual("Morty")
    })
})

const rickAndMorty = (rick) => {
    if(rick === "rick") {
        return "Morty"
    } else {
        return "Try again"
    }
}

// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
// Write the function that will make the test pass.

Input: "alvin"
Output: "Hello, alvin"

describe("greetName", () => {
    it("takes a name as an argument and returns a greeting with that name to the screen", () => {
        expect(greetName("alvin")).toEqual("Hello, alvin")
    })
})

const greetName = (name) => {
    return `Hello, ${name}`
}


// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
// Write the function that will make the test pass.

Input:

describe("oddOrEven", () => {
    it("takes a number as an argument and logs whether the number is odd or even.", () => {
        expect(oddOrNot(5)).toEqual("odd")
        expect(oddOrNot(6)).toEqual("not an odd")
    })
})

const oddOrEven = (number) => {
    if(number % 2 !== 0) {
        return "odd"
    } else {
        return "even"
    }
}


// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
// Write the function that will make the test pass.

Input: 24
Output: 48

describe("doubler", () => {
    it("takes a number and returns the result of the number multiplied by 2.", () => {
        expect(doubler(24)).toEqual(48)
    })
})

const doubler = (number) => {
    return number * 2
}

// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
// Write the function that will make the test pass.

Input: 4, 5
Output: 20

describe("multiply", () => {
    it("takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.", () => {
        expect(multiply(4, 5)).toEqual(20)
    })
})

const multiply = (number1, number2) => {
    return number1 * number2
}

// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// Write the function that will make the test pass.

// Input: 10, 5
// Output: 10 is evenly divisible by 5

describe("divisibleBy", () => {
    it("takes two numbers as arguments and returns whether the first number is evenly divisible by the second", () => {
        expect(divisibleBy(10, 5)).toEqual("10 is evenly divisible by 5")
    })
})

const divisibleBy = (num1, num2) => {
    if(num1 % num2 === 0) {
        return `${num1} is evenly divisible by ${num2}`
    } else {
        return "Try again"
    }
}

// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'.
// Write the function that will make the test pass.

// Input: [3, 5, 15, 22]
// Output: "fizz, buzz, fizzbuzz, 22"

describe("fizzbuzz", () => {

    it("If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'.", () => {
        const output = ["fizz", "buzz", "fizzbuzz", 22]
        const input = [3, 5, 15, 22]

        expect(fizzbuzz(input)).toEqual(output)
    })
})

const input = [3, 5, 15, 22]

const fizzbuzz = (array) => {
    return array.map(value => {
        if(value % 15 === 0) {
            return "fizzbuzz"
        } else if(value % 3 === 0) {
            return "fizz"
        } else if(value % 5 === 0) {
            return "buzz"
        } else {
            return value
        }
    })   
}