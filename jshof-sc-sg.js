// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
var arr1 = [3, 9, 15, 4, 10]
// --> [30, 90, 150, 40, 100]

let byTen = (array) => {
    return array.map(value => {
        return value * 10
    })
}
console.log(byTen(arr1))
// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
var arr2 = [2, 7, 3, 5, 8, 10, 13]
// --> [7, 3, 5, 13]

let theOdd = (array) => {
    return array.filter(value => value % 2 !== 0)
}
console.log(theOdd(arr2))
// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// --> "nicework"

let theString = (array) => {
    return array.filter(value => typeof value == "string").join("")
}
console.log(theString(comboArr))
console.log("string")
// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
var filterArrayValues = [58, " ", "abcd", true, null, false, 0]
// --> [58, "abcd", true]

let specificValue = (array) => {
    return array.filter(value => value !== false && value !== null && value !== 0 && value !== '' && value !== " ")
}
console.log(specificValue(filterArrayValues))
// STRETCH Challenges

// Create a function that takes in a string and returns a new string with all the vowels removed.
var str = "javascript is awesome"
// --> "jvscrpt s wsm"

let noVowels = (string) => {
    let vowel = ["a", "e", "i", "o", "u"]
    for(i = 0; i < string.split().length; i++)
    return string.split().filter(value => string[" "] !== vowel)
}
console.log(noVowels(str))
// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
var arr1 = [3, 7, 10, 5, 4, 3]
var arr2 = [7, 8, 2, 1, 5, 4]
// --> [3, 7, 10, 5, 4, 8, 2, 1]