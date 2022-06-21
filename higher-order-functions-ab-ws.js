


// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
 var arr1 = [3, 9, 15, 4, 10]

 const multiply = arr1.map(value => {
    return value * 10
 })

 console.log(multiply)


// // --> [30, 90, 150, 40, 100]
// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
 var arr2 = [2, 7, 3, 5, 8, 10, 13]

const filteredArray = arr2.filter(value => {
    return value % 2 !== 0
})

console.log(filteredArray)


// // --> [7, 3, 5, 13]
// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
 var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]

const filteredLetters = comboArr.filter(value => {
    if (typeof value === "string") {
        return value
    }
})

console.log(filteredLetters)


// // --> "nicework"
// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
 var filterArrayValues = [58, " ", "abcd", true, null, false, 0]

const filterAll = filterArrayValues.filter(value => {
    if (value !== false && value !== " ") {
        return value
    }

})

console.log(filterAll)



// // --> [58, "abcd", true]



// Create a function that takes in a string and returns a new string with all the vowels removed.

console.log("-----")

 var str = "javascript is awesome"


newArray = str.split("").filter(value => {
    if (value !== "a" && value !== "e" && value !== "i" && value !== "o" && value !== "u") {
        return value
    }
}).join("")

console.log(newArray)


// // --> "jvscrpt s wsm"
// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
 var arr1 = [3, 7, 10, 5, 4, 3]
 var arr2 = [7, 8, 2, 1, 5, 4]
// // --> [3, 7, 10, 5, 4, 8, 2, 1]

// const twoArray = (arr11, arr12) => {
//     arr13 = arr11.concat(arr12)

//     return arr13.filter(value => {

//     })
// }


// const twoArray = (arr1.concat(arr2)).filter(value => {

// })