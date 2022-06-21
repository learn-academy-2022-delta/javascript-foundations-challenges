// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
// Declare a function called tens
// Use the .map to iterate over each value and return a new array
// multiply each element of array by 10
// console.log(tens)

var arr1 = [3, 9, 15, 4, 10]
const tens = arr1.map(value => {
    return value * 10
})
console.log(tens)
// // --> [30, 90, 150, 40, 100]

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
// Declare a function named onlyOdds
// Declare a parameter of array
// Return parameter with the .filter to filter the odd numbers and return there value.
// Console.log the function name with arr2 passing as parameter
var arr2 = [2, 7, 3, 5, 8, 10, 13]
const onlyOdds = array => {
    return array.filter(value => value % 2 !== 0)
}
console.log(onlyOdds(arr2))
// // --> [7, 3, 5, 13]

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
// Declare a function named niceWork
// Declare a parameter of array
// Use the .filter method to filter data type using typeof and .join to return a string
// Console.log function name with array name as parameter.
var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
const niceWork = array => {
    return array.filter(value => typeof value === "string").join("")
}
console.log(niceWork(comboArr))
// // --> "nicework"

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
 
// Declare a function called onlyTrue
// Set the parameter as array
// Use .filter to filter the values of the array and check to see if they meet the conditions stated
// Console.log to see the return

var filterArrayValues = [58, " ", "abcd", true, null, false, 0]

const onlyTrue = (array) => {
    return array.filter(value => {
        return value !== false && value !== " " && value !== null && value !==0
    })
}
console.log(onlyTrue(filterArrayValues))
 
 // // --> [58, "abcd", true]





 // STRETCH Challenges

// Create a function that takes in a string and returns a new string with all the vowels removed.

// Not completed , needs to be checked
var str = "javascript is awesome"


const noVowels = (array) => {
    return array.filter(value => {
        return value !== "a" && value !== "e" && value !== "i" && value !== "o" && value !== "u"
    })
}
console.log(noVowels(str))


// // --> "jvscrpt s wsm"



// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// var arr1 = [3, 7, 10, 5, 4, 3]
// var arr2 = [7, 8, 2, 1, 5, 4]
// // --> [3, 7, 10, 5, 4, 8, 2, 1]