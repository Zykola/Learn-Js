// // // ############ ChallengeOne ############ //
// let nowDate = new Date();
// let myBirthday = new Date("May 17, 06");
// let date = nowDate - myBirthday;

// let seconds = date / 1000;
// let minutes = seconds / 60;
// let hours = minutes / 60;
// let days = hours / 24;
// let months = days / 30;
// let years = months / 12;

// console.log(`I am  ${seconds} Seconds old`);
// console.log(`I am  ${minutes} minutes old`);
// console.log(`I am  ${hours} hours old`);
// console.log(`I am  ${days} Days old`);
// console.log(`I am  ${months} Months old`);
// console.log(`I am  ${years} Years old`);
// // // ############ ChallengeOne ############ //

// // ############ ChallengeTwo ############ //
// Needed Output
// let time = new Date("1980");
// time.setHours(0);
// time.setSeconds(1);
// console.log(time);

// let time = new Date(0);
// time.setFullYear(1980);
// time.setHours(0);
// time.setSeconds(1);
// console.log(time);
// ("Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)");
// // ############ ChallengeTwo ############ //

// // ############ ChallengeThree ############ //
// // Needed Output
// let date = new Date();
// date.setMonth(4);
// date.setHours(18, 13, 20);
// date.setDate(0);
// console.log(date);

// let months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// console.log(
//   `Previous Month Is ${months[date.getMonth()]} And Last Day Is ${date.getDate()}`
// );
// // "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)";
// // "Previous Month Is April And Last Day Is 30";
// // ############ ChallengeThree ############ //

// // // ############ ChallengeFour ############ //
// // Needed Output
// // let start = new Date();
// // let end = new Date("May 17 , 2006");
// // let bir = end - start;
// // console.log(bir);
// console.log(new Date("2006/5/17"));
// console.log(new Date("2006-05-17T00:00:00"));

// let dateOne = new Date();
// dateOne.setFullYear(2006);
// dateOne.setMonth(4, 17);
// dateOne.setHours(0);
// dateOne.setMinutes(0);
// dateOne.setSeconds(0);
// console.log(dateOne);
// // "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// // "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// // "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// // // ############ ChallengeFour ############ //

// // ############ ChallengeFive ############ //
// let start = new Date();
// for (let i = 1; i < 99999; i++){
//   document.write(`${i}<br/>`)
// }
// let end = new Date();
// console.log(`Loop Took ${end - start} Milliseconds.`);
// // ############ ChallengeFive ############ //

// // ############ ChallengeSix ############ //
// function* gen() {
//   let n1 = 1;
//   let n2 = 14;
//   while (true) {
//     yield `${n1}4`
//     n1 += n2
//     n2+=20
//   }
// }
// let generator = gen();

// console.log(generator.next()); // {value: 14, done: false}
// console.log(generator.next()); // {value: 154, done: false}
// console.log(generator.next()); // {value: 494, done: false}
// console.log(generator.next()); // {value: 1034, done: false}
// console.log(generator.next()); // {value: 1774, done: false}
// console.log(generator.next()); // {value: 2714, done: false}
// console.log(generator.next()); // {value: 3854, done: false}
// console.log(generator.next()); // {value: 5194, done: false}
// console.log(generator.next()); // {value: 6734, done: false}
// // ############ ChallengeSix ############ //

// // ############ ChallengeSeven ############ //
// function* genNumbers() {
//   yield* [1, 2, 2, 2, 3, 4, 5];
// }
// function* genLetters() {
//   yield* ["A", "B", "B", "B", "C", "D"];
// }

// // Write Your Generator Function Here

// function* genAll() {
//   yield* new Set(genNumbers());
//   yield* new Set(genLetters());
// }

// let generator = genAll();

// console.log(generator.next()); // {value: 1, done: false}
// console.log(generator.next()); // {value: 2, done: false}
// console.log(generator.next()); // {value: 3, done: false}
// console.log(generator.next()); // {value: 4, done: false}
// console.log(generator.next()); // {value: 5, done: false}
// console.log(generator.next()); // {value: "A", done: false}
// console.log(generator.next()); // {value: "B", done: false}
// console.log(generator.next()); // {value: "C", done: false}
// console.log(generator.next()); // {value: "D", done: false}
// // ############ ChallengeSeven ############ //

// // ############ ChallengeEight ############ //
import calc from "./mod-one.js";
import * as modOne from "./mod-two.js";

// main.js File
console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60
// // ############ ChallengeEight ############ //
