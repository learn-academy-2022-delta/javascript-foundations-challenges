// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
// var arr1 = [3, 9, 15, 4, 10]
// // --> [30, 90, 150, 40, 100]
const arr1 = [3, 9, 15, 4, 10]
const mappedArray = (array) => {
    return array.map(value => value * 10)
}
console.log(mappedArray(arr1))
// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
var arr2 = [2, 7, 3, 5, 8, 10, 13]
// // --> [7, 3, 5, 13]
const onlyOdd = (array) => {
    return array.filter(value => value % 2 !==0) 
}
console.log(onlyOdd(arr2))

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // --> "nicework"
const newString  = (array) => {
    if (typeof(array) === "string") {
        return array;
    }
}
let string = comboArr.filter(newString);
console.log(string)
// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
// var filterArrayValues = [58, " ", "abcd", true, null, false, 0]
// // --> [58, "abcd", true]
