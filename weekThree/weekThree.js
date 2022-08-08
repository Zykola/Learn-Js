// ############ Challenge One ############ //
console.log(((10 * 20 * 15) / 3 - (190 + 10)) % 400); // 0
// ############ Challenge One ############ //

// ############ Challenge Two ############ //
let numOne = 3;

// Solution One
console.log(numOne + numOne); // 6

// Solution Two
console.log(numOne + +"3"); // 6

// Soultion Three
console.log(numOne + true + true + true); // 6

// Soultion Four
console.log((numOne += numOne)); // 6

// Solution Five
console.log((numOne * numOne) / numOne); // 6

// Solution Six
console.log((numOne * numOne * numOne) / (numOne * numOne)); // 6
// ############ Challenge Two ############ //

// ############ Challenge Three ############ //
let num = "10";

// Solution One
console.log(+num + +num); // 20

// Solution Two
console.log(+num + +"10" * true); // 20

// Solution Three
console.log(+num + +"10"); // 20

// I don't know
// Solution Six
console.log("Write Your Code Here"); // 6
// ############ Challenge Three ############ //

// ############ Challenge Four ############ //
let points = 10;
++points;
++points;
++points;
console.log(points); // 13
--points;
--points;
--points;
--points;
--points;
console.log(points); // 8;
// ############ Challenge Four ############ //
