 //Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
// Write the function that will make the test pass.
//input: "yes" if tired 
// output: "drink coffee"

//input: "no" if not tired
//output: "keep working"


describe("ifTired", () => {
  it("drink coffee", () => {
    expect(ifTired("yes")).toEqual("drink coffee")
    expect(ifTired("no")).toEqual("keep working")
  })
})
//ReferenceError: ifTired is not defined

const  ifTired= (string) => {
  if(string === "yes"){
    return "drink coffee"
  } else if(string === "no") {
    return "keep working"
  }
}



// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
// Write the function that will make the test pass.

//input: "yes" if stressed
// output: "relax"

//input: "no" if not stressed
//output: "keep going"




describe("ifStressed", () => {
  it("relax", () => {
    expect(ifStressed("yes")).toEqual("relax")
    expect(ifStressed("no")).toEqual("keep going")
  })
})
//  ReferenceError: ifStressed is not defined

const  ifStressed= (string) => {
  if(string === "yes"){
    return "relax"
  } else if(string === "no") {
    return "keep going"
  }
}



// Write the test for a function that returns "in budget" if a price is lower than $300.
// Write the function that will make the test pass.

//input: number
// output: "in budget"

//input: number
//output: "outside budget" 


describe("budget", () => {
  it("return compare numbers to budget", () => {
    var mybudget = 300
    var num = 100 
    expect(budget(mybudget, num)).toEqual("in budget")
    expect(budget(mybudget, 400)).toEqual("outside budget")
  })
})
//ReferenceError: budget is not defined


const budget = (budget1, num1) => {
  if(budget1 > num1) {
    return ("in budget")
  } else {
    return ("outside budget")
  }

}



// Write the test for a function that takes in two arguments(numbers) and returns the smaller number.
// Write the function that will make the test pass.


//input: 2 numbers
//output: smaller number 


describe("smallNumber", () => {
  it("return smaller number", () => {
    expect(smallNumber(5, 10)).toEqual(5)
  })
})
//ReferenceError: smallNumber is not defined

const smallNumber = (num1, num2) => {
  if (num1 < num2) {
    return (num1) 
  } else {
    return (num2)
  }
}




// Write the test for a function that takes in one argument(number) and returns whether the number is odd.
// Write the function that will make the test pass.

//input: number
//output: "odd"

//input: number
//output: "not odd"


describe("number", () => {
  it("return odd or not odd", () => {
    expect(number(5)).toEqual("odd")
    expect(number(4)).toEqual("not odd")
  })
})
//ReferenceError: number is not defined

const number = (num1) => {
  if (num1 % 2 !== 0) {
    return ("odd") 
  } else {
    return ("not odd")
  }
}


// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
// Write the function that will make the test pass.

//input: fruit
//output: the color

describe("fruits", () => {
  it("return color of fruit", () => {
    var banana = "yellow"
    var apple = "red"
    var grape = "purple"
    expect(fruits(banana)).toEqual("yellow") 
    expect(fruits(apple)).toEqual("red") 
    expect(fruits(grape)).toEqual("purple") 
  })
})

//ReferenceError: fruits is not defined

const fruits = (fruit) => {
  return fruit 
}



// Write the test for a function called rick that returns "Morty".
// Write the function that will make the test pass.

//input: rick
//output: Morty



describe("rick", () => {
  it("return Morty", () => {
    expect(rick()).toEqual("Morty")
  })
})

//ReferenceError: rick is not defined

const rick = () => {
  return "Morty"
}



// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
// Write the function that will make the test pass.


//input: name 
//output: Hello name 

describe("greeter", () => {
  it("return greeting with the name", () => {
    var name = "Morty"
    expect(greeter(name)).toEqual("hello" + name)
  })
})
//ReferenceError: greeter is not defined


const greeter = (name) => {
  return "hello" + name 
}
// return `hello ${name}`


// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
// Write the function that will make the test pass.


//input: number
//output: "odd"

//input: number
//output: "even"


describe("numbers", () => {
  it("return odd or even", () => {
    expect(numbers(5)).toEqual("odd")
    expect(numbers(4)).toEqual("even")
  })
})
//ReferenceError: numbers is not defined

const numbers = (num1) => {
  if (num1 % 2 !== 0) {
    return ("odd") 
  } else {
    return ("even")
  }
}



// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
// Write the function that will make the test pass.

//input: number 
//output: multiplied by 2 



describe("doubler", () => {
  it("return multiplied by 2", () => {
    expect(doubler(5)).toEqual(10)
  })
})

//ReferenceError: doubler is not defined

const doubler = (num) => {
  return (num * 2)
}



// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
// Write the function that will make the test pass.

//input: num1, num2 
//output: num1 * num2  



describe("multiply", () => {
  it("return numebrs multiplied by eachother ", () => {
    expect(multiply(5, 10)).toEqual(50)
  })
})
//ReferenceError: multiply is not defined 

const multiply = (num1, num2) => {
  return (num1 * num2)
}



// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// Write the function that will make the test pass.


//input: num1, num2 
//output: num1 is evenly divisible by num2  


describe("divisibleBy", () => {
  it("return numebrs evenly divisible by eachother ", () => {
    expect(divisibleBy(10, 5)).toEqual("10 is evenly divisible by 5")
    expect(divisibleBy(10, 3)).toEqual("10 is not evenly divisible by 3")
  })
})
//ReferenceError: divisibleBy is not defined

const divisibleBy = (num1, num2) => {
  if((num1 / num2)% 2 === 0){
    return `${num1} is evenly divisible by ${num2}`
  } else {
    return `${num1} is not evenly divisible by ${num2}`
  }
  
}


// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'.
// Write the function that will make the test pass.



//input:  multiple of 3
//output: fizz

//input: multiple of 5
//output: buzz 
  
//input: any multiple of 15 
//output: fizzbuzz


describe("fizzbuzz", () => {
  it("return fizz if multiple of 3, buzz if multiple of 5, and fizzbuzz if any multiple of 15", () => {
    expect(fizzbuzz(12)).toEqual("fizz")
    expect(fizzbuzz(25)).toEqual("buzz")
    expect(fizzbuzz(30)).toEqual("fizzbuzz")
  })
})
//ReferenceError: fizzbuzz is not defined


const fizzbuzz = (num) => {
  if(num % 15 === 0) {
    return "fizzbuzz"
  } else if(num % 5 === 0) {
    return "buzz"
  } else {
    return "fizz"
  }
}
