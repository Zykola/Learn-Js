// // ############ Challenge One ############ //
// function getDetails(zName, zAge, zCountry) {

// function namePattern(zName)
// {
//     // Write Your Code Herez
//     zName = zName.split(' ')
//     return `${zName[0]} ${zName[1][0].toUpperCase()}.`
//     // Osama Mohamed => Osama M.
//     // Ahmed ali => Ahmed A.
// }

// function ageWithMessage(zAge)
// {
//     // Write Your Code Here
//     zAge = zAge.split(' ')
//     return `Your Age Is ${zAge[0]}`
//     // 38 Is My Age => Your Age Is 38
//     // 32 Is The Age => Your Age Is 32
// }

// function countryTwoLetters(zCountry)
// {
//     // Write Your Code Here
//     return `You Live In ${zCountry.slice(0,2).toUpperCase()}`
//     // Egypt => You Live In EG
//     // Syria => You Live In SY
// }

// function fullDetails()
// {
//   return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)} ${countryTwoLetters(zCountry)}`;
// }
//   return fullDetails(); // Do Not Edit This
// }

// console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// // Hello Osama M., Your Age Is 38, You Live In EG

// console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// // Hello Ahmed A., Your Age Is 32, You Live In SY

// // ############ Challenge One ############ //

// // ############ Challenge Two ############ //
// let itsMe = () => 'Iam A Normal Function';
// console.log(itsMe()) // Iam A Normal Function

// let urlCreate = (protocol,web,tld) => `${protocol}://www.${web}.${tld}`
// console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
// // ############ Challenge Two ############ //

// // ############ Challenge Three ############ //
// // ############ Challenge Three ############ //

// ############ Challenge Four ############ //
// function specialMix(...data) {
//   st = [];
//   num = 0;

//   for (let i = 0; i < data.length; i++) {
//     if (typeof data[i] === 'string') {
//         st+=data[i]
//         for(let j = 0; j < st.length; j++){
//          if (typeof data[i] === 'number') {
//      num+=st[j]
//         }
//     }
//   }
//   return num 
// }
// console.log(specialMix("10Test", "Testing", "20Cool"));

// console.log(specialMix(10, 20, 30)); // 60
// console.log(specialMix("10Test", "Testing", "20Cool")); // 30
// console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
// console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
// ############ Challenge Four ############ //
// else
// {
//   nU += data[i];
// }
        // if (typeof data[j] === Number) {
        //   num += data[j];
        //   return num
        // }else{
        //   st += data[j];
        //   return st
        // }