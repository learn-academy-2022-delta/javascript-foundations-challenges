// Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Use .map() or .filter() to complete all of the following exercises.
// Don't forget to pseudo code.

// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.

/*Pseudo Code:
Declare a function call it array2
Take an array as parameters
Run (.map) to iterate over each value
Return each element in a new array of the same length muliplied by 10
*/
var arr1 = [3, 9, 15, 4, 10]
// --> [30, 90, 150, 40, 100]

const array2 = (array) => {
  return array.map(value => value * 10)
}
console.log(array2(arr1)) //[ 30, 90, 150, 40, 100 ]


// Write a function that takes in an array of numbers and returns a new array with only odd numbers.

/* Psuedo Code:
Declare a function named oddNumbers
Declare the parameters arr2.filter
Run each number using (.filter)
Return odd numbers
*/
var arr2 = [2, 7, 3, 5, 8, 10, 13]
// // --> [7, 3, 5, 13]
const oddNumbers = arr2.filter(value => {
    return value % 2 === 1
})
console.log(oddNumbers) //[ 7, 3, 5, 13 ]


// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method

var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // --> "nicework"

const letters = comboArr.filter(value => {
    return value 
})
console.log(letters)



// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
// var filterArrayValues = [58, " ", "abcd", true, null, false, 0]
// // --> [58, "abcd", true]