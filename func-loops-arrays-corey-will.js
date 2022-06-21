// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
var testArr1 = [3, 9, 15, 4, 10]
// // --> [9, 27, 45, 12, 30]
const times = (array) =>{
    let results = []
    for(let i = 0; i < array.length; i++){
        results.push(array[i] * 3)
    }
    return results
}

console.log(times(testArr1))

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
 var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// // --> [-7, 3, 5, 13]
const odds = (array) =>{
    let odd = []
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 !== 0){
            odd.push(array[i])
        }
    }
    return odd
}

console.log(odds(testArr2))

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
 var comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]
// // --> "nicework"

const strings =  (array) =>{
    let newArr = []
    for(let i = 0; i < array.length;i++){
        if(typeof array[i] === 'string'){
            newArr.push(array[i])
        }
    }
    return newArr
}

console.log(strings(comboArr))

// Create a function that takes in an array of numbers and returns the sum.
 var addThese1 = [1, 2, 3, 4]
// // --> 10
 var addThese2 = []
// // --> 0
const sum = (array) =>{
    let add = 0;
    for(let i = 0; i < array.length; i++){
        add += array[i]
    }
    return add
}
console.log(sum(addThese1))
console.log(sum(addThese2))


// Create a function that takes in an array of numbers and returns the index of the largest number.
 var indexHighestNumber = [1, 4, 2, 3]
 
// // --> 1
const highest = (array) =>{
    let biggest = 0
    for(let i = 0; i < array.length; i++){
        if(array[i] > biggest){
            biggest = array[i]
        }
    }
    return biggest
}
console.log(highest(indexHighestNumber))

// STRETCH Challenges

// Create a function that takes in two arrays and returns one array with no duplicate values.
 var arr1 = [3, 7, 10, 5, 4, 3, 3]
 var arr2 = [7, 8, 2, 3, 1, 5, 4]
// // --> [3, 7, 10, 5, 4, 8, 2, 1]
const noDuplicate = (array1,array2) =>{
    let newArr = array1.concat(array2)
   let newArr2 = newArr.filter((item, pos) => newArr.indexOf(item)=== pos)
   return newArr2
}
console.log(noDuplicate(arr1,arr2))



// Create a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.
 var arrayLength = 6
 var arrayValue = 0
// // --> [0, 0, 0, 0, 0, 0]

 var arrayLength = 4
 var arrayValue = 11
// // --> [11, 11, 11, 11]
const filled = (num1, num2) => {
    newArr = []
    for(i = 0; i < num1; i++){
        newArr.push(num2)
    }

    return newArr
}
console.log(filled(arrayLength, arrayValue))
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
 var addUp1 = 4
// // 1 + 2 + 3 + 4 = 10
// // --> 10


 var addUp2 = 10
// // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
// // --> 55

 var addUp3 = 600
// // --> 180300
const add = (num) =>{
    let newVal = 0;
    for(i = 0; i <= num; i++){
       newVal = newVal + i
    }
    return newVal
}
console.log(add(addUp3))

// EPIC Challenges

// Create a function called highLow that takes in a number and returns whether the number is higher or lower than the "answer".
// Create an HTML page and link your JavaScript file. More info here.
// As a user, I see a prompt or input where I can guess a number between 1 and 100 (both inclusive).
// As a user, I can see if my guess is too high or too low.
// As a user, if I guess the "answer" correctly I am notified that I won.
// As a user, I can continue to guess the "answer" until I am correct.
// STRETCH: As a user, if I have not guessed the correct number in seven tries I see a losing message.
let winner = Math.ceil(Math.random() * 100);
console.log(winner)
const highLow = (winner) =>{
   
let num = prompt("Guess a number!")
for(i=0; i<7; i++){
   if(num == winner && i < 6){
     let result = alert(`${winner} is correct!`)
     return result
    } else if(num !== winner && i < 6 ){
    num =  prompt( ` incorrect. Please enter a new number.`)
    }else{
        let result = alert('You are out of guesses')
        return result
    }
}
    return result
}

highLow(winner)