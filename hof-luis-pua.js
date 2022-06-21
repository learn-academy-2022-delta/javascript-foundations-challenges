//Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
var arr1 = [3, 9, 15, 4, 10]
// --> [30, 90, 150, 40, 100]

//Psuedo Code:
    //create a function using .map 

const multipliedNums = arr1.map(value =>{
    return value * 10
})
console.log(multipliedNums)

//Write a function that takes in an array of numbers and returns a new array with only odd numbers.
var arr2 = [2, 7, 3, 5, 8, 10, 13]
// --> [7, 3, 5, 13]

//Psuedo code:
    //create a function using .filter

const onlyOdd = (array) =>{
    return array.filter(value => value % 2 !== 0)
}
console.log(onlyOdd(arr2))
