// 1 - Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
// Desired output --> [9, 27, 45, 12, 30]
var testArr1 = [3, 9, 15, 4, 10]

const multipliedThree = (array) => {
    let newArr = []
    for (let i=0; i<array.length; i++) {
        newArr.push(array[i] * 3)
    }
    return newArr
}
console.log(multipliedThree(testArr1))

// 2 - Write a function that takes in an array of numbers and returns a new array with only odd numbers.
// Desired output --> [-7, 3, 5, 13]
var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]

const onlyOdd = (array) => {
    let newArr = []
    for (let i=0; i<array.length; i++) {
        if(array[i] %2 ===1) {
           newArr.push(array[i]) 
        }
    }
        return newArr
} 
console.log(onlyOdd(testArr2))

// 3 - Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
// Desired output --> "nicework"
var comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]

const mixedOutput = (array) => {
    let newArr = []
    for (let i=0; i<array.length; i++) {
       if(typeof array[i] === "string") {
        newArr.push(`${array[i]}`)
       } console.log(newArr(""))
    }  
}
mixedOutput(comboArr) 


// 4 - Create a function that takes in an array of numbers and returns the sum.
// Desired output --> 10, 0 
var addThese1 = [1, 2, 3, 4]


var addThese2 = []


// 5 - Create a function that takes in an array of numbers and returns the index of the largest number.
// Desired output --> 1

var indexHighestNumber = [1, 4, 2, 3]
