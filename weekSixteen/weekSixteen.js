// ############ CallengeOne ############ //
let myNumbers = [1, 2, 3, 4, 5];

let [a,,,,e] = myNumbers;
// Write Your Destructuring Assignment Here

console.log(a * e); // 5
// ############ CallengeOne ############ //

// ############ CallengeTwo ############ //
let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

// Write Your Destructuring Assignment Here
let [a, b , c ,[d, e ,[f, g]]] = mySkills;
console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel
// ############ CallengeTwo ############ //

//############ CallengeThree ############///
let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Play With Arrays To Prepare For Destructuring
// Write Your Destructuring Assignment Here

[a , b , c] = [arr3[1],arr2[0],arr1[0]]
console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// My Best Friends: Shady, Mahmoud, Ahmed
//############ CallengeThree ############//

//############ CallengeFour ############//
const member = {
  age: 30,
  working: false,
  country: "Egypt",
  hobbies: ["Reading", "Swimming", "Programming"],
};

// Write Your Destructuring Assignment Here
const {
    age: a,
    working: w,
    country: c,
    hobbies: [h1, , h3],
} = member;

console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);// My Age Is 30 And Iam Not Working
console.log(`I Live in ${c}`);// I Live in Egypt
console.log(`My Hobbies: ${h1} And ${h3}`);// My Hobbies: Reading And Programming
//############ CallengeFour ############//

//############ CallengeFive ############//

//############ CallengeFive ############//

//############ CallengeSix ############//
let chosen = 2;

let myFriends = [
  {title: "Osama", age: 39, available: true,  skills: ["HTML", "CSS"] },
  {title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  {title: "Sayed", age: 33, available: true,  skills: ["PHP", "Laravel"] },
];

// Write Your Code Here
showDetails(chosen)
function showDetails(num){
  ({title , age , available, skills:[,twoSkill] } = myFriends[num - 1])
console.log(title)
console.log(age)
console.log(available === true ? 'available' : 'Not Available')
console.log(twoSkill)

}

//############ CallengeSix ############//







