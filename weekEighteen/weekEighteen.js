// ########### Form Validatio (Practice) ########### //
// document.getElementById("register").onsubmit = function () {
//   let phone = document.getElementById("phone").value;
//   let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/; // (1234) 567-8910
//   let validationResult = phoneRe.test(phone);

//   if (validationResult === false) {
//     return false;
//   }
//   return true;
// };
// ########### Form Validatio (Practice) ########### //

// ########### ChallengeOne ########### //
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
console.log(ip.match(/(\w+|:)+/gi));
// ########### ChallengeOne ########### //

// ########### ChallengeTwo ########### //
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
console.log(specialNames.match(/\bOs\d*O\b/gi));
// Output
// ['Os10O', 'OsO', 'Os100O']
// ########### ChallengeTwo ########### //

// ########### ChallengeThree ########### //
let phone = "+(995)-123 (4567)";
console.log(phone.match(/\+\(\d{3}\)-\d{3}\s\(\d{4}\)/g)); //-\d{3}\s\d{4}/
// ########### ChallengeThree ########### //

// ########### ChallengeFour ########### //
// let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
// ########### ChallengeFour ########### //

// ########### ChallengeFive ########### //
let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re = /(\d{2}(\/|\s-\s|\s)){2}(\d{4}|\d{2})/g;
console.log(date1.match(re)); // "25/10/1982"
console.log(date2.match(re)); // "25 - 10 - 1982"
console.log(date3.match(re)); // "25 10 1982"
console.log(date4.match(re)); // "25 10 82"
// ########### ChallengeFive ########### //

// ########### ChallengeFive ########### //
// let url1 = 'elzero.org';
// let url2 = 'http://elzero.org';
// let url3 = 'https://elzero.org';
// let url4 = 'https://www.elzero.org';
// let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

// let re = /(https?:\/\/)?(www.)?\w+.(org):?.*/gi; // Write Your Pattern Here

// console.log(url1.match(re));
// console.log(url2.match(re));
// console.log(url3.match(re));
// console.log(url4.match(re));
// console.log(url5.match(re));
// // ########### ChallengeFive ########### //