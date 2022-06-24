// Consider this variable:

const person = {
  firstName: "Arthur",
  lastName: "Dent"
}
// Write the code that accesses the first name of the person object.
console.log(person.firstName)

// Write the code that accesses the last name of the person object.
console.log(person.lastName)

// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
person.homePlanet = "Earth"
console.log(person.homePlanet)

// Update the person object with a method that logs "Arthur Dent is from planet Earth".
person.getData = function(){
    return `${this.firstName} ${this.lastName} is from planet ${this.homePlanet}`
}
console.log(person.getData())


// Consider this variable:

const product = {
  name: "chair",
  price: 24.99
}
// Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".
const describeProduct = (item) => {
    return `The product is a ${item.name}. It costs $${item.price}.`
}
console.log(describeProduct(product))

// Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.
// Consider this variable:
const totalWithTax = (item) =>{
    let salesTax = (.07 * item.price) + item.price
    return salesTax.toFixed(2)
}

console.log(totalWithTax(product))

const lunch = {
  name: "PB and Banana",
  type: "sandwich",
  ingredients: ["bread", "peanut butter", "banana"]
}
// Write the code that accesses the ingredients property.
console.log(lunch.ingredients)

// Write the code that access the third ingredient of the lunch object.
console.log(lunch.ingredients[2])

// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
const meal = (item) => {
    return `The ingredients for a ${item.name} ${item.type} are ${item.ingredients[0]}, ${item.ingredients[1]}, and ${item.ingredients[2]}.`
}
console.log(meal(lunch))
// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
lunch.combo = function(){
    return meal(lunch)
}
console.log(lunch.combo())

// Consider this variable:

const animals = [
  { name: "Waffles", type: "dog", age: 7 },
  { name: "Fluffy", type: "cat", age: 14 },
  { name: "Spelunky", type: "dog", age: 4 },
  { name: "Hank", type: "cat", age: 11 }
]
// Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.
const animalType = (item) =>{
    return item.filter(value => value.type === "cat")
}
console.log(animalType(animals))

// Create a function that takes in an array of animal objects and returns a new array with only the names of the animals.
const names = (item) =>{
    return item.map(value => value.name)
}
console.log(names(animals))

// Create a function that takes in an array of animal objects and returns a new array of the names of the animals that are more than 10 years old.
const older = (item) =>{
    // let names = item.filter(value => value.age > 10)
    // item.old = names
    // return item.old
    let old = item.filter(value => value.age > 10)
    return old.map(value => value.name)
        
}
console.log(older(animals))

// Create a function that takes in an array of animal objects and returns a new array with a sentence about each animal.

const sentence = (item) =>{
    return  item.map(value => `The animal is ${value.name}` )
     
    
}

console.log(sentence(animals))
// Consider this variable:

const author = {
  name: "H. G. Wells",
  genre: "science fiction"
}
// Write the code that destructures the author object so that the following code snippet will run successfully:

// // Output: "H. G. Wells is a science fiction author"
let {name} = author,
{genre} = author
 console.log(`${name} is a ${genre} author`)



// Consider this variable:

const pokeOne = {
  species: "Charmandar",
  pokemon_type: "Fire"
}

const pokeTwo = {
  species: "Magikarp",
  pokemon_type: "Water"
}
// Create a function called describePokemon that take an object like the ones above and uses destructuring to return a description of the Pokemon so that the following code snippet will run successfully:

// console.log(describePokemon(pokeOne))
// // Output: "Charmandar is a Fire pokemon"
// console.log(describePokemon(pokeTwo))
// // Output: "Magikarp is a Water pokemon"
const describePokemon = (item) =>{
    let {species} = item,
    {pokemon_type} = item

    return `${species} is a ${pokemon_type} pokemon`
}
console.log(describePokemon(pokeOne))
console.log(describePokemon(pokeTwo))


// Consider this variable:
const triangleDimensions = {
  base: 2,
  height: 5
}
// Modify the triangleDimensions object to have a method that returns the area of the triangle.
triangleDimensions.area = function(){
    return (this.base * this.height)/2
}
console.log(triangleDimensions.area())

// Write the code that will update the base to be the value of 6.
triangleDimensions.base = 6
console.log(triangleDimensions.base)

// Consider this variable:

const learn = {
  cohorts: {
    "2021": ["Alpha", "Bravo", "Charlie", "Delta", "Echo"],
    "2022": ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot"]
  }
}
// Write the code that logs the name of your cohort.
console.log(learn.cohorts[2022][3])

// Write the code that uses destructuring to log the name of your cohort.
const [delta] = learn.cohorts[2022].filter(value => value === "Delta")
console.log(delta)


// Create a function that takes an object like the one above and returns an array with a string of every cohort name and year.


// // Output: ["2021 Alpha", "2021 Bravo", "2021 Charlie", "2021 Delta", "2021 Echo", "2022 Alpha", "2022 Bravo", "2022 Charlie", "2022 Delta", "2022 Echo", "2022 Foxtrot"]
const learnCohort = (item) =>{
 let year1 = learn.cohorts[2021].map(value => `2021 ${value}`)
 let year2 = learn.cohorts[2022].map(value => `2022 ${value}`)
 let combo = year1.concat(year2)

 return combo
 
}
console.log(learnCohort(learn))