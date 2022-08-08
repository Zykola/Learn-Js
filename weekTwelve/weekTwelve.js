// // Create Variables
// let myElement = document.createElement("div");
// let myHeading = document.createElement("h2");
// let myPragrafe = document.createElement("p");

// // Create Values
// let myHeadingText = document.createTextNode("Prodact Title");
// let myPragrafeText = document.createTextNode("Prodact Descrption");

// // Add Values In Variables
// myElement.className = "prodact";
// myHeading.appendChild(myHeadingText);
// myPragrafe.appendChild(myPragrafeText);

// // Add Variables In myElement
// myElement.appendChild(myHeading)
// myElement.appendChild(myPragrafe)

// // BODY
// document.body.appendChild(myElement);
// // ############ CallengeOne ############ //

// // querySelector
// console.log(document.querySelector("div"));
// console.log(document.querySelector("#elzero"));
// console.log(document.querySelector(".element"));

// // querySelectorAll
// console.log(document.querySelectorAll("div")[0]);
// console.log(document.querySelectorAll("#elzero")[0]);
// console.log(document.querySelectorAll(".element")[0]);

// //getElement
// console.log(document.getElementsByTagName("div")[0]);
// console.log(document.getElementById("elzero"));
// console.log(document.getElementsByClassName("element")[0]);
// console.log(document.getElementsByName("js")[0]);

// // ############ CallengeOne ############ //

// // ############ CallengeTwo ############ //
// document.images[0].src ="https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
// document.images[0].alt = "Elzero Logo";
// let myElement = document.querySelectorAll("div")[1];

// for (let i = 0; i <= 10; i++) {
//   console.log(myElement);
// }

// // ############ CallengeTwo ############ //

// // ############ CallengeThree ############ //
let myInput = document.querySelector("[name= 'dollar']");
let myMessge = document.querySelector(".result");

document.forms[0].onclick = function () {
  let value = +myInput.value;
  myMessge.innerHTML = `${value} USD Dollar = ${value * 15.6} Egyptian Pound`;
};
// myInput.onclick = function (e) {
//   console.log(e);
// };
// // ############ CallengeThree ############ //

