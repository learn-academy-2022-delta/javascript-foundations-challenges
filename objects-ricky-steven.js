// 1 - Consider this variable:

const person = {
  firstName: "Arthur",
  lastName: "Dent",
  homePlanet: "Earth",
  verbs: "is from"
}

// a. Write the code that accesses the first name of the person object.
    
console.log(person.firstName) // Arthur

// b. Write the code that accesses the last name of the person object.

console.log(person.lastName) // Dent

// c. Write the code that gives the person object a property of homePlanet and set it to 'Earth'. // verbs: "is from"
 

// d. Update the person object with a method that logs "Arthur Dent is from planet Earth".

console.log(person.firstName + " " + person.lastName + " " +  person.verbs + " " + person.homePlanet) //Arthur Dent is from Earth


// 2 - Consider this variable:

// const product = {
//   name: "chair",
//   price: 24.99,
//   describeProduct: 
//     return "The product is a `${this.name}. It costs ${this.price}`."
  
// }
// console.log(product)

// 2a -  Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".


// 2b - Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.

// 3 - Consider this variable:

const lunch = {
  name: "PB and Banana",
  type: "sandwich",
  ingredients: ["bread", "peanut butter", "banana"]
}
// 3a - Write the code that accesses the ingredients property.

console.log(lunch.ingredients) //[ 'bread', 'peanut butter', 'banana' ]

// 3b - Write the code that access the third ingredient of the lunch object.

console.log(lunch.ingredients[2]) // banana

// 3c - Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."




// 3d - Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

// 4 - Consider this variable:

// const animals = [
//     { name: "Waffles", type: "dog", age: 7 },
//     { name: "Fluffy", type: "cat", age: 14 },
//     { name: "Spelunky", type: "dog", age: 4 },
//     { name: "Hank", type: "cat", age: 11 }
//   ]

// 4a - Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.


// 4b - Create a function that takes in an array of animal objects and returns a new array with only the names of the animals.


// 4c - Create a function that takes in an array of animal objects and returns a new array of the names of the animals that are more than 10 years old.

// 4d - Create a function that takes in an array of animal objects and returns a new array with a sentence about each animal.

// 5 - Consider this variable:
  
//   const author = {
//     name: "H. G. Wells",
//     genre: "science fiction"
//   }
// 5a - Write the code that destructures the author object so that the following code snippet will run successfully:

//   console.log(`${name} is a ${genre} author`)

//   // Output: "H. G. Wells is a science fiction author"
  