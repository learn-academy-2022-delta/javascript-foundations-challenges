// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
describe("coffee", () => {
    it("returns drink coffee if you are tired and keep working if you are not tired", () => {
        expect(coffee("yes")).toEqual("drink coffee")
        expect(coffee("no")).toEqual("keep working")
    })
})
// Write the function that will make the test pass.
let coffee = (string) => {
    if(string == "yes") {
        return "drink coffee"
    }else if(string == "no") {
        return "keep working"
    }
}
// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
describe("stress", () => {
    it("returs relax if you are stressed and keep going if you are not stressed", () => {
        expect(stress("yes")).toEqual("relax")
        expect(stress("no")).toEqual("keep going")
    })
})
// Write the function that will make the test pass.
let stress = (string) => {
    let tired = string == "yes"
    let noTired = string == "no"
    if(tired) {
        return "relax"
    }else if(noTired) {
        return "keep going"
    }
}
// Write the test for a function that returns "in budget" if a price is lower than $300.
describe("budget", () => {
    it("returns in budget if a price is lower than $300", () => {
        expect(budget(250)).toEqual("in budget")
    })
})
// Write the function that will make the test pass.
let budget = (number) => {
    if(number < 300) {
        return "in budget"
    }
}
// Write the test for a function that takes in two arguments(numbers) and returns the smaller number.
describe("smallr", () => {
    it("takes in two numbers and returns the smaller number", () => {
        expect(smallr(3, 2)).toEqual(2)
    })
})

// Write the function that will make the test pass.
let smallr = (a, b) => {
    if(a > b) {
        return b
    }else {
        return a
    }
}

// Write the test for a function that takes in one argument(number) and returns whether the number is odd.
describe("odd", () => {
    it("takes in one number and returns whether the number is odd", () => {
        let num1 = 1 % 2 !== 0
        expect(odd(num1)).toEqual(`${num1} is odd`)
    })
})
// Write the function that will make the test pass.
let odd = (number) => {
    if(number % 2 !== 0) {
        return `${number} is odd`
    }
}
// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
describe("color", () => {
    it("takes in a fruit and returns yellow if the arguement is banana, red if apple and purple if grape.", () => {
        expect(color("banana")).toEqual("yellow")
        expect(color("apple")).toEqual("red")
        expect(color("grape")).toEqual("purple")
    })
})
// Write the function that will make the test pass.
let color = (string) => {
    if(string == "banana") {
        return 'yellow'
    }else if(string == "apple") {
        return 'red'
    }else if(string == "grape")
    return 'purple'
}

// Write the test for a function called rick that returns "Morty".
describe("rick", () => {
    it("returns 'Morty", () => {
        expect(rick()).toEqual("Morty")
    })
})
// Write the function that will make the test pass.
let rick = () => {
    return "Morty"
}
// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
describe("greeter", () => {
    it("takes a name as an argument and returns a greeting with that name to the screen", () => {
        expect(greeter("Sam")).toEqual("Welcome Sam!")
    })
})
// Write the function that will make the test pass.
let greeter = (name) => {
    let greeting = `Welcome ${name}!`
    return greeting
}
// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
describe("oddOrEven", () => {
    it("takes a number as an argument and logs whether the number is odd of even", () => {
        expect(oddOrEven(1)).toEqual("odd")
        expect(oddOrEven(2)).toEqual("even")
    })
})
// Write the function that will make the test pass.
let oddOrEven = (number) => {
    if(number % 2 !== 0) {
        return "odd"
    }else if(number % 2 == 0) {
        return "even"
    }
}
// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
describe("doubler", () => {
    it("takes a number and returns the result of the number multiplied by 2.", () => {
        expect(doubler(10)).toEqual(20)
    })
})
// Write the function that will make the test pass.
let doubler = (number) => {
    let dub = number * 2
    return dub
}
// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
describe("multiply", () => {
    it("takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.", () => {
        expect(multiply(2, 4)).toEqual(8)
    })
})
// Write the function that will make the test pass.
let multiply = (a, b) => {
    return a * b
}
// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
describe("divisibleBy", () => {
    it("takes two numbers as arguments and returns whether the first number is evenly divisible by the second", () => {
        expect(divisibleBy(10, 5)).toEqual("10 is evenly divisible by 5")
    })
})
// Write the function that will make the test pass.
let divisibleBy = (a, b) => {
    if(a % b == 0)
    return `${a} is evenly divisible by ${b}`
}
// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'.
describe("fizzbuzz", () => {
    it("If a number is a multiple of 3, replace it with the word fizz. If a number is a multiple of five, replace it with the word buzz. If a number is a multiple of both 3 and 5, replace it with fizzbuzz", () => {
        expect(fizzbuzz(3)).toEqual("fizz")
        expect(fizzbuzz(5)).toEqual("buzz")
        expect(fizzbuzz(15)).toEqual("fizzbuzz")
    })
})
// Write the function that will make the test pass.
let fizzbuzz = (number) => {
    if(number % 3 == 0 && number % 5 == 0) {
        return "fizzbuzz"
    } else if(number % 3 == 0) {
        return "fizz"
    } else if(number % 5 == 0) {
        return "buzz"
    }
}