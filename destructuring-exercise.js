// Destructuring Exercise 

// Object Destructuring 1
// What does the following code return/print?

let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

// returns value of each key
console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846 

// Object Destructuring 2
// What does the following code return/print?

let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659
};

let {numPlanets, ...discoveryYears} = planetFacts;

// returns key[value] of remaining items of planetFacts obj 
console.log(discoveryYears); // {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659} 

// Object Destructuring 3
// What does the following code return/print?

function getUserData({firstName, favoriteColor="green"}){
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

// returns template literal 
getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // 'Your name is Alejandro and you like purple' 
getUserData({firstName: "Melissa"}) // 'Your name is Melissa and you like green' -> uses default value green 
getUserData({}) // 'Your name is undefined and you like green' -> firstName is undefined; green is default value 

// Array Destructuring 1
// What does the following code return/print?

let [first, second, third] = ["Maya", "Marisa", "Chi"];

// returns value according to position of element
console.log(first); // 'Maya' 
console.log(second); // 'Marisa' 
console.log(third); // 'Chi' 

// Array Destructuring 2
// What does the following code return/print?

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  "Raindrops on roses",
  "whiskers on kittens",
  "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings"
]

// returns value according to position of element
console.log(raindrops); // 'Raindrops on roses' 
console.log(whiskers); // 'whiskers on kittens' 
console.log(aFewOfMyFavoriteThings); // ['Bring copper kettles', 'warm woolen mittens', 'Brown paper packages tied up with strings']

// Array Destructuring 3
// What does the following code return/print?

let numbers = [10, 20, 30];
// 10 remains same; (20, 30) -> (30, 20) 
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]
console.log(numbers) // [10, 30, 20] 

// ES2015 Refactoring
// In this exercise, you’ll refactor some ES5 code into ES2015.

// ES5 Assigning Variables to Object Properties
var obj = {
  numbers: {
    a: 1,
    b: 2
  }
};

var a = obj.numbers.a;
var b = obj.numbers.b;

// ES2015 Object Destructuring
/* Write an ES2015 Version */

const obj = {
  numbers: {
    a: 1, 
    b: 2
  }
}
const {a, b} = obj.numbers 

// ES5 Array Swap
