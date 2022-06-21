// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.

// Declare a variable as triples
// Set up new array
// Write a for loop to multiply each element by 3, push to empty array
// Return results and console.log 

var testArr1 = [3, 9, 15, 4, 10]

const triples = (array) => {
    let results = []
    for( let i = 0; i<array.length; i++){
        results.push(array[i] * 3)
    }
    return results
}

console.log(triples(testArr1))// // --> [9, 27, 45, 12, 30]


// Write a function that takes in an array of numbers and returns a new array with only odd numbers.

// Declare a function oddOnly
// Use a conditonal statement with modulo to return odd numbers
// Create an empty array called oddNums to push odd numbers into
// Return odd numbers and console.log to see output

var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]


const oddOnly = (array) => {
    let oddNums = []
    for(let i= 0; i<array.length; i++){
        if(array[i] % 2 === 1 || array[i] % 2 === -1){
            oddNums.push(array[i])
            }
        } 
        return oddNums
    }
  
console.log(oddOnly(testArr2)) // // --> [-7, 3, 5, 13]

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.

var comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]

// Declare a function
// Create an empty array to add newly created elements to
// Iterate over array  and use .push() method
// Check the data type to make sure it's a string 
// Give an error message
// Return letters with .join("")
// Console.log

const onlyLetters = (array) => {
    let letters = []
    for(let i=0; i<array.length; i++)
    if(typeof array[i] === "string") {
        letters.push(array[i])
    }
    return letters.join("")
}
console.log(onlyLetters(comboArr))

// // --> "nicework"

// Create a function that takes in an array of numbers and returns the sum.
// Declare a function sumOf
// Use sum to add all the elements of the array together
// Created a for loop
// Returned sum and console.log

var addThese1 = [1, 2, 3, 4]
// // --> 10

var addThese2 = []
// // --> 0

const sumOf = (array) => {
    let sum = 0
    for(let i=0; i<array.length; i++) {
        sum += array[i]
    }
    return sum
}
console.log(sumOf(addThese1))
console.log(sumOf(addThese2))


// Create a function that takes in an array of numbers and returns the index of the largest number.
var indexHighestNumber = [1, 4, 2, 3]
// // --> 1
//Declare a function
// Use Math.max to find the largest number
//Use indexOf to find the index of largest number
// Console.log

const largestNum = Math.max.apply(null, indexHighestNumber)
const index = indexHighestNumber.indexOf(largestNum)

console.log(index)
// STRETCH Challenges

// Create a function that takes in two arrays and returns one array with no duplicate values.
// var arr1 = [3, 7, 10, 5, 4, 3, 3]
// var arr2 = [7, 8, 2, 3, 1, 5, 4]
// // --> [3, 7, 10, 5, 4, 8, 2, 1]

// Create a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.
// var arrayLength = 6
// var arrayValue = 0
// // --> [0, 0, 0, 0, 0, 0]

// var arrayLength = 4
// var arrayValue = 11
// // --> [11, 11, 11, 11]

// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
// var addUp1 = 4
// // 1 + 2 + 3 + 4 = 10
// // --> 10

// var addUp2 = 10
// // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
// // --> 55

// var addUp3 = 600
// // --> 180300


// EPIC Challenges

// Create a function called highLow that takes in a number and returns whether the number is higher or lower than the "answer".
// Create an HTML page and link your JavaScript file. More info here.
// As a user, I see a prompt or input where I can guess a number between 1 and 100 (both inclusive).
// As a user, I can see if my guess is too high or too low.
// As a user, if I guess the "answer" correctly I am notified that I won.
// As a user, I can continue to guess the "answer" until I am correct.
// STRETCH: As a user, if I have not guessed the correct number in seven tries I see a losing message.