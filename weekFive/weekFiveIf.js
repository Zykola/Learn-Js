// ####### ChallengeOne ####### //
// let num = 100;
// if (num < 10) {
//   console.log(`00${num}`);
// } else if (num >= 10 && num < 100) {
//   console.log(`0${num}`);
// } else if (num >= 100) {
//   console.log(num);
// }
// // ####### ChallengeOne ####### //

// // ####### ChallengeTwo ####### //
// let num1 = 9;
// let str = "9";
// let str2 = "20";

// if (num1 == str) {
//   console.log(`${num1} Is The Same Value As ${str}`);
// }
// if (num1 == str && typeof num1 != typeof str) {
//   console.log(`${num1} Is The Same Value As ${str} But Not The Same Type`);
// }

// if (num1 !== str2) {
//   console.log(`${num1} s Not The Same Value Or The Same Type As  ${str}`);
// }
// if (typeof str == typeof str2 && str != str2) {
//   console.log(`${num1} Is The Same Type As  ${str} But Not The Same Value`);
// }
// ####### ChallengeTwo ####### //

// ####### ChallengeThree #######  //
// let num1 = 10;
// let num2 = 30;
// let num3 = "30";
// num3 > num1 && typeof num3 != typeof num2
//   ? console.log(
//       "30 Is Larger Than 10 And Type string Not The Same Type As number"
//     )
//   : num3 > num1 && num3 == num2 && typeof num3 != typeof num2
//   ? console.log(
//       "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
//     )
//   : num3 !== num1 && typeof num3 != typeof num2
//   ? console.log(
//       `${num3} Value And Type Is Not The Same As ${num1} And Type Is Not The Same As ${num2}`
//     )
//   : console.log("error");
// ####### ChallengeThree ####### //

// Edit What You Want Here

// ####### ChallengeFour ####### //
// let num1 = 11;
// let num2 = 10;
// let num3 = 11;
// let num4 = 33;

// /*
//   Do Not Edit Below This Line
//   Needed Output
//   True 7 Times
// */

// // Condition 1

// if (num1 > num2) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 2

// if (num1 > num2 && num1 < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 3

// if (num1 > num2 && num1 === num3) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 4

// if (num1 + num2 < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 5

// if (num1 + num3 < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 6

// if (num1 + num2 + num3 < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 7

// if (num4 - (num1 + num3) + num2 === 21) {
//   console.log("True");
// } else {
//   console.log("False");
// }
// ####### ChallengeFour ####### //

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&
/*
If Condition Challenge
*/
// let a = 40;

// a < 10
//   ? console.log(10)
//   : a >= 10 && a <= 40
//   ? console.log("10 To 40")
//   : a > 40
//   ? console.log("> 40")
//   : console.log("Unknown");

// // Write Previous Condition With Ternary If Syntax

// let st = "Elzero Web School";
// // W Position May Change
// if ((st.length * 2).toString() === "34") {
//   console.log("Good");
// }

// if (
//   st
//     .slice(st.indexOf("W") - 1, st.indexOf("W") + 1)
//     .toLowerCase()
//     .trim() === "w"
// ) {
//   console.log("Good");
// }

// if (typeof Number(st) !== "string") {
//   console.log("Good");
// }

// if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
//   console.log("Good");
// }
