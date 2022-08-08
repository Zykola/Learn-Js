// ############ Challenge One ############ //
function sayHello(theName, theGender = "") {
  if (theGender == "Male") {
    console.log(`Hello Mr ${theName}`);
  } else if (theGender == "Female") {
    console.log(`Hello Miss ${theName}`);
  } else {
    console.log(`Hello ${theName}`);
  }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

// ############ Challenge One ############ //

//  ############ Challenge Two ############ //
function calculate(firstNum, secondNum , operation) {
   if (secondNum != null ) {
     if (operation == "add") {
       console.log(firstNum + secondNum);
     } else if (operation == "subtract") {
       console.log(firstNum - secondNum);
     } else if (operation == "multiply") {
       console.log(firstNum * secondNum);
     } else {
       console.log(firstNum + secondNum);
     }
   } else {
     console.log(" Second Number Not Found");
   }
 }

 // Needed Output
 calculate(20); // Second Number Not Found
 calculate(20, 30); // 50
 calculate(20, 30, "add"); // 50
 calculate(20, 30, "subtract"); // -10
 calculate(20, 30, "multiply"); // 600

// ############ Challenge Two ############ //

// ############ Challenge Three ############ //
function ageInTime(theAge) {
   if ((theAge > 100) | (theAge < 10)) {
     console.log("Age Out Of Range");
   }else{
       console.log(`${theAge*=12} => Months`)
       console.log(`${theAge*=4} => Weeks`)
       console.log(`${theAge*=24} => Days`)
       console.log(`${theAge*=60} => Minutes`)
       console.log(`${theAge*=60} => Seconds`)
   }
 }

 // Needed Output
 ageInTime(110); // Age Out Of Range
 ageInTime(16); // Months Example => 456 Months

// ############ Challenge Three ############ //

// ############ Challenge Four ############ //
function showDetails(...argument)
{ let name,age=0,flag=false;
 for(let i=0;i< argument.length;i++)
 {
 if(typeof argument[i] === 'string' )
    name=argument[i];
 if(Number.isInteger(argument[i]))
    age=argument[i];
 if( typeof argument[i] === "boolean") 
    flag=argument[i];
 }
    (flag)?console.log(`Hello ${name}, Youe Age Is ${age}, You Are Available For Hire`):console.log(`Hello ${name}, Youe Age Is ${age}, You Are Not Available For Hire`);
}
showDetails("Osama", 32, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(24, "ahmed", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 33, "ibrahim"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "mostafa", 43); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
// ############ Challenge Four ############ //

// ############ Challenge Five ############ //
function createSelectBox(startYear, endYear) {
  for (let i = startYear; i <= endYear; ++i) {
    document.write(`<option value = ${i} > ${i} </option>`);
  }
}
createSelectBox(2000, 2021);
// ############ Challenge Five ############ //

// ############ Challenge Six ############ //
let result = 1;

function multiply(...Arguments) {
  for (let i = 0; i < Arguments.length; ++i) {
    if (typeof Arguments[i] == "string") {
      continue;
    }
    result *= Arguments[i];
  }
  console.log(result);
}


multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
// ############ Challenge Six ############ //
