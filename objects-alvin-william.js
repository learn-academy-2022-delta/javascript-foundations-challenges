// Challenges
// Consider this variable:

const person = {
  firstName: "Arthur",
  lastName: "Dent",
  homePlanet: "Earth",
  isFromPlanetEarth: function() {
    return `${this.firstName} ${this.lastName} is from planet ${this.homePlanet}`
  }
}

// Write the code that accesses the first name of the person object.
console.log(person.firstName)

// Write the code that accesses the last name of the person object.
console.log(person.lastName)

// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
console.log(person.homePlanet)

// Update the person object with a method that logs "Arthur Dent is from planet Earth".
console.log(person.isFromPlanetEarth())

// Consider this variable:

const product = {
  name: "chair",
  price: 24.99,
  describeProduct: function() {
    return `The product is a ${this.name}. It costs $${this.price}`
  },
  totalWithTax: function() {
    return Math.round((this.price * 0.07 + this.price) * 100) / 100
  }
}

// Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".
console.log(product.describeProduct())

// Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.
console.log(product.totalWithTax())

// Consider this variable:

const lunch = {
  name: "PB and Banana",
  type: "sandwich",
  ingredients: ["bread", "peanut butter", "banana"],
  getIngredients: function() {
    return `The ingredients for a ${this.name} ${this.type} are ${this.ingredients}`
  }
}

// Write the code that accesses the ingredients property.
console.log(lunch.ingredients)

// Write the code that access the third ingredient of the lunch object.
console.log(lunch.ingredients[2])

// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
console.log(lunch.getIngredients())

// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

// Consider this variable:

const animals = [
  { name: "Waffles", type: "dog", age: 7 },
  { name: "Fluffy", type: "cat", age: 14 },
  { name: "Spelunky", type: "dog", age: 4 },
  { name: "Hank", type: "cat", age: 11 }
//   animalSentence: function() {
//     return `The ${this.type}'s name is ${this.name} and it is ${this.age} years old`
//   }
]

// Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.
const cats = animals.filter(value => value.type === "cat")
console.log(cats)

// Create a function that takes in an array of animal objects and returns a new array with only the names of the animals.
const names = animals.map(value => value.name)
console.log(names)

// Create a function that takes in an array of animal objects and returns a new array of the names of the animals that are more than 10 years old.
const moreThanTen = animals.filter(value => value.age > 10)
console.log(moreThanTen)

// Create a function that takes in an array of animal objects and returns a new array with a sentence about each animal.
// console.log(animals.animalSentence())


// Consider this variable:

const author = {
  name: "H. G. Wells",
  genre: "science fiction"
}
const {name, genre } = author

// Write the code that destructures the author object so that the following code snippet will run successfully:
console.log(`${name} is a ${genre} author`)

// // Output: "H. G. Wells is a science fiction author"

// Consider this variable:
const pokeOne = {
  species: "Charmandar",
  pokemon_type: "Fire",
  describePokemon: function() {
    return `${this.species} is a ${this.pokemon_type} pokemon`
  }
}

const pokeTwo = {
  species: "Magikarp",
  pokemon_type: "Water",
  describePokemon: function() {
    return `${this.species} is a ${this.pokemon_type} pokemon`
  }
}

// // Create a function called describePokemon that take an object like the ones above and uses destructuring to return a description of the Pokemon so that the following code snippet will run successfully:

// console.log(describePokemon(pokeOne))
// // // Output: "Charmandar is a Fire pokemon"

// console.log(describePokemon(pokeTwo))
// // Output: "Magikarp is a Water pokemon"


// Consider this variable:
const triangleDimensions = {
  base: 2,
  height: 5,
  getArea: function() {
    return .5 * this.base * this.height
  },
  updateSize: function() {
    return 6 * this.height * .5
  }
}
// Modify the triangleDimensions object to have a method that returns the area of the triangle.
// area = 1/2 * base * height
console.log(triangleDimensions.getArea())


// Write the code that will update the base to be the value of 6.
console.log(triangleDimensions.updateSize())


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
const { "2022" } = learn.cohorts[2022][3]

console.log(Delta)

// Create a function that takes an object like the one above and returns an array with a string of every cohort name and year.
// // Output: ["2021 Alpha", "2021 Bravo", "2021 Charlie", "2021 Delta", "2021 Echo", "2022 Alpha", "2022 Bravo", "2022 Charlie", "2022 Delta", "2022 Echo", "2022 Foxtrot"]
