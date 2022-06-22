



// describe(" ", () => {
//     it(" ", () => {
//         expect().toEqual()
//         expect().toEqual()
//     })
// })






// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.

//psudo code - 

describe("drinkCoffee", () => {
    it("returns drink coffee if you are tired and keep working if you are not tired", () => {
        expect(drinkCoffee("tired")).toEqual("drink coffee")
        expect(drinkCoffee("not tired")).toEqual("keep working")
    })
})

const drinkCoffee = (string) => {
    if (string === "tired") {
        return "drink coffee"
    } else {
        return "keep working"
    }
}




// Write the function that will make the test pass.
// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.

describe("stressed", () => {
    it("returns relaxed if the input is stressed and keep going if the input is not stressed", () => {
        expect(stressed("stressed")).toEqual("relax")
        expect(stressed("not stressed")).toEqual("keep going")
    })
})

const stressed = (string) => {
    if (string === "stressed") {
        return "relax"
    } else {
        return "keep going"
    }
}




// Write the function that will make the test pass.
// Write the test for a function that returns "in budget" if a price is lower than $300.



describe("inBudget", () => {
    it("returns in budget if a price is lower than $300", () => {
        const lowPrice = 0 
        const highPrice = 301
        expect(inBudget(lowPrice)).toEqual("in budget")
        expect(inBudget(highPrice)).toEqual("not affordable")
    })
})

const inBudget = (price) => {
    if (price < 300) {
        return "in budget"
    } else if (price > 300) {
        return "not affordable"
    }
}



// Write the function that will make the test pass.
// Write the test for a function that takes in two arguments(numbers) and returns the smaller number.

describe("numbers", () => {
    it("takes two numbers and returns the smaller number", () => {
        const num1 = 1
        const num2 = 2
        expect(numbers(num1,num2)).toEqual("num1 is smaller")
        expect(numbers(num2,num1)).toEqual("num2 is smaller")
    })
})

const numbers = (num1, num2) => {
    if (num1 < num2 ) {
        return "num1 is smaller" 
    } else if ( num2 < num1) {
        return "num2 is smaller"
    }
}

// Write the function that will make the test pass.
// Write the test for a function that takes in one argument(number) and returns whether the number is odd.

describe("number", () => {
    it("it takes one number and returns whether its odd", () => {
        const oddNumb = 1
        expect(number(oddNumb)).toEqual("number is odd")
    })
})

const number = (oddNumb) => {
    if (oddNumb % 2 === 1) {
        return "number is odd"
    } else {
        return "not odd"
    }
}


// Write the function that will make the test pass.
// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.


describe("fruit", () => {
    it("takes three arguments and returns yellow for banana, red for apple, and purple for grape", () => {
        const fruit1 = "banana"
        const fruit2 = "apple"
        const fruit3 = "grape" 
        expect(fruit(fruit1, fruit2, fruit3)).toEqual("yellow", "red", "purple")


    })
})

const fruit = (fruit1, fruit2, fruit3) => {
    if ( fruit1 === "banana") {
        return "yellow"
    }
    if ( fruit2 === "apple") {
        return "red"
    }
    if ( fruit3 === "grape") {
        return "purple"
    }
}


// Write the function that will make the test pass.
// Write the test for a function called rick that returns "Morty".

describe("rick", () => {
    it("its a function called rick than returns the string Morty", () => {
        expect(rick()).toEqual("Morty")
    })
})

const rick = () => {
    return "Morty"
}

// Write the function that will make the test pass.
// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.

describe("greeter", () => {
    it("takes a name in and returns a greeting with that name", () => {
        const name1 = "test"
        expect(greeter(name1)).toEqual(`hello ${name1}`)
    })
})

const greeter = (name1) => {
    return `hello ${name1}`
}

// Write the function that will make the test pass.
// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.

describe("oddOrEven", () => {
    it("takes a number input and logs whether its odd or even", () => {
        const numberArg = 1
        expect(oddOrEven(numberArg)).toEqual(numberArg % 2)
    
    })
})

const oddOrEven = (numberArg) => {
    if (numberArg % 2 === 0) {
        return 0
    } else if ( numberArg % 2 === 1) {
        return 1
    }
}


// Write the function that will make the test pass.
// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.

describe("doubler", () => {
    it("takes a number input and outputs its double", () => {
        const numbToDouble = 2
        expect(doubler(numbToDouble)).toEqual(numbToDouble * 2)
    })
})

const doubler = (numbToDouble) => {
    return numbToDouble * 2

}


// Write the function that will make the test pass.
// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.

describe("multiply", () => {
    it("takes two numbers input, multiplies them, and logs the resulting number", () => {
        const num11 = 1
        const num12 = 2
      
        expect(multiply(num11, num12)).toBeCloseTo(2)
        
    })
})



const multiply = (num11, num12) => {
    return num11 * num12

}


// Write the function that will make the test pass.
// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

describe("divisibleBy", () => {
    it("takes two numbers and returns whether the first is evenly divisble by the second", () => {
        const num15 = 10
        const num16 = 5
        expect(divisibleBy(num15, num16)).toEqual(`${num15} is evenly divisble by ${num16}`)
    })
})

const divisibleBy = (num15, num16) => {
    if (num15 % num16 === 0) {
        return `${num15} is evenly divisble by ${num16}`
    }
}




// Write the function that will make the test pass.
// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'.


describe("fizzbuzz", () => {
    it("takes in a number, if it is a multiple of 3 it returns fizz, if its a multiple of 5 it returns buzz and if its a multiple of 3 and 5 it returns fizzbuzz", () => {

        expect(fizzbuzz(num22)).toEqual("fizzbuzz" || "fizz" || "buzz")
    })
})

let inputFizz = 15

const fizzbuzz = (inputFizz) => {
    if (inputFizz % 3 === 0 && inputFizz % 5 === 0) {
        return "fizzbuzz"
    } else if (inputFizz % 3 === 0) {
        return "fizz"
    } else if (inputFizz % 5 === 0) {
        return "buzz"
    }
}






// Write the function that will make the test pass.