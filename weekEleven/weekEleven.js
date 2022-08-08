// ############ CallengeOne ############ //
let member = {
  name: "Elzero",
  age: 38,
  country: "Egypt",
  fullDetails: function () {
    return `My Name Is ${this.name} My Age Is ${this.age} I Live in ${this.country}`;
  },
};

console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails()); // My Name Is Elzero, My Age Is 38, I Live in Egypt
// ############ CallengeOne ############ //

// ############ CallengeTwo ############ //
let objMethodOne = {
  property: "Method One",
};

console.log(objMethodOne.property); // "Method One"

let objMethodTwo = {};

objMethodTwo.property = "Method Two";

console.log(objMethodTwo.property); // "Method Two"

let objMethodThree = Object.create(objMethodOne);
objMethodThree.property = "Method Three";
console.log(objMethodThree.property); // "Method Three"

let objMethodFour = {};
objMethodFour["property"] = "Method Four";
console.log(objMethodFour.property); // "Method Four"
// ############ CallengeTwo ############ //

// ############ CallengeThree ############ //
let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

// Create Your Object Here in One Line

let finalObject = Object.assign({}, { a }, threeNums, twoNums);
console.log(finalObject);

/*
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
*/
// ############ CallengeThree ############ //
