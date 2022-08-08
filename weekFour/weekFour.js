//  ########## ChallengeOne ########## //
console.log(100000); // 100000
console.log(100000.0); // 100000
console.log(100_00_0); // 100000
console.log(1e5); // 100000
console.log(5e4 + 5e4); // 100000
console.log(5e4 * 2); // 100000
console.log(10 ** 5); // 100000
console.log(1e5 / 1); // 100000
console.log(2e5 - 1e5); // 100000
console.log(Math.ceil(99999.9)); // 100000
//  ########## ChallengeOne ########## //

//  ########## ChallengeTwo ########## //
console.log(Number.MIN_SAFE_INTEGER * -1);
//  ########## ChallengeTwo ########## //

//  ########## ChallengeThree ########## //
//  ########## ChallengeThree ########## //

//  ########## ChallengeFour########## //
let myVar = "100.56789 Views";
console.log(parseInt(myVar)); // 100
myVar = +parseFloat(myVar).toFixed(2);
console.log(Number(myVar)); // 100.57
//  ########## ChallengeFour########## //

//  ########## ChallengeFive########## //
let num = 10;
num = +Number.isInteger(num);
console.log(num + num); // 2
//  ########## ChallengeFive########## //

//  ########## ChallengeSix########## //
let flt = 10.4;

console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(parseInt(flt)); // 10
console.log((parseInt(flt) * parseInt(flt)) / parseInt(flt)); // 10
//  ########## ChallengeSix########## //

//  ########## ChallengeSeven########## //
var x = Math.random();
console.log(Math.floor(x * 5));
//  ########## ChallengeSeven########## //

// /*
// Number Challenge
// */

let a = 100;
let c = 1e2;
let d = 2.4;
let b = 2_00.5;

// Find Smallest Number In All Variables And Return Integer
console.log(Math.round(Math.min(a, b, c, d)));

// Use Variables a + d One Time To Get The Needed Output
console.log(a ** parseInt(d)); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(Math.trunc(d));
console.log(Math.round(d));
console.log(Math.floor(d));
console.log(parseInt(d));

// Use Variables b + d To Get This Valus
console.log((parseInt(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(Math.round(parseInt(b) / Math.ceil(d))); // 67 => Number 

