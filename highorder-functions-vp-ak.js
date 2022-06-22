


//Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.

var arr1 = [3, 9, 15, 4, 10]
const multi = (array) => {
  return array.map(value => value * 10)
}
console.log(multi(arr1))
//output: 30, 90, 150, 40, 100


//Write a function that takes in an array of numbers and returns a new array with only odd numbers.


var arr2 = [2, 7, 3, 5, 8, 10, 13]
const odds = (array) => {
  return array.filter(value => value % 2 === 1)
}
console.log(odds(arr2))
//output: 7, 3, 5, 13



//Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method

var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// --> "nicework"

const letters = (array) => {
  let Nletters = []
  for (let i=0; i<array.length; i++){
    if(typeof array[i === "string"]) {
      Nletters.push(array[i])
    }  
  }
  return Nletters
}
console.log(letters(comboArr))
