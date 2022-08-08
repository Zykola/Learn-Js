// // ############ Challenge One ############ //

// let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// let num = 3;
// // Method 1
// myFriends.pop();
// console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
// // Method 2
// console.log(myFriends.slice(" ", num)); // ["Ahmed", "Elham", "Osama"];

// // ############ Challenge One ############ //

// // ############ Challenge Two ############ //

// let friends = ["Ahmed", "Eman", "Osama", "Gamal"];
// friends.shift();
// friends.pop();
// console.log(friends); // ["Eman", "Osama"]

// // ############ Challenge Two ############ //

// // ############ Challenge Three ############ //
// let arrOne = ["C", "D", "X"];
// let arrTwo = ["A", "B", "Z"];
// let finalArr = [];

// // Write One Single Line Of Code

// console.log(finalArr.concat(arrOne, arrTwo).sort().reverse()); // ["Z", "X", "D", "C", "B", "A"]

// // ############ Challenge Three ############ //

// // ############ Challenge Four ############ //
// let website = "Go";
// let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

// console.log([
//   words[words.length - true][0].slice(website.length).toUpperCase(),
// ]); // ZERO
// // ############ Challenge Four ############ //

// // ############ Challenge Five ############ //
// let needle = "JS";
// let haystack = ["PHP", "JS", "Python"];

// //Write 3 Solutions
// if (haystack.includes(needle)) {
//   console.log("Found");
// }
// if (haystack.indexOf(needle) !== -1) {
//   console.log("Found");
// }
// if (haystack.lastIndexOf(needle) !== -1) {
//   console.log("Found");
// }
// // ############ Challenge Five ############ //

// // ############ Challenge Six ############ //
// let arr1 = ["A", "C", "X"];
// let arr2 = ["D", "E", "F", "Y"];
// let allArrs = [];

// // Your Code Here
// allArrs = allArrs
//   .concat(arr1, arr2)
//   .sort()
//   .reverse()
//   .reverse()
//   .slice(true + true + true + true)
//   .join("")
//   .toLowerCase();
// console.log(allArrs); // fxy
// // ############ Challenge Six ############ //
let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

my.unshift("Elzero");
let c = my.shift();
my.pop();
my.pop();
my.reverse();
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

let a = my.slice(++zero, -zero);
console.log(a); // ["Elham", "Mazero"]

console.log(c); // "Elzero"

console.log(a[+zero][++counter] + my[--zero][zero]); // "rO"
