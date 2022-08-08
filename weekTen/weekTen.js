// ############ Challenge One ############ //
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let liStr = mix.map((ele) => typeof ele === 'string' ? ele : '').reduce((acc, cur) => `${acc}${cur}`)

console.log(liStr)

// Elzero
// ############ Challenge One ############ //

// ############ Challenge Four ############ //
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let nums = numsAndStrings.filter((a) => typeof a !== 'string').map((a) => -a)

console.log(nums)
// ############ Challenge Four ############ //

// &&&&&&&&&& Challenge &&&&&&&&&& // 
let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
let zLetter = myString [myString.length - true]

let solution = myString
  .split('')
  .map((e) => e.replace('_', ' '))
  .filter((el) => el !== ',' && isNaN(parseInt(el)) && el !== zLetter)
  .reduce((acc ,cur) =>  acc === cur ? `${cur}`: `${acc}${cur}`)

console.log(solution); // Elzero Web School