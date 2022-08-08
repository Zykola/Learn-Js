// ############ Challenge One ############ //
/*
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Learn JavaScript</title>
    <script> // One Is Not Work Beacause Is Top Code 
      document.getElementById("el").style.color = "red";
    </script>
    <script>
      window.onload = function () {
        document.getElementById("el").style.color = "red";
      };
    </script>
  </head>
  <body>
    <h1 id="el">Page Title</h1>
    <script>
      document.getElementById("el").style.color = "red";
    </script>
  </body>
</html>
*/
// ############ Challenge One ############ //

// ############ Challenge Two ############ //
document.querySelector("h1").style.color = "blue";
document.querySelector("h1").style.fontSize = "80px";
document.querySelector("h1").style.fontWeight = "bold";
document.querySelector("h1").style.textAlign = "center";
document.querySelector("h1").style.fontFamily = "Arial";
// ############ Challenge Two ############ //

// ############ Challenge Three ############ //
console.log(
  "%c Elzero %c Web %c School",
  "color : red; font-size: 40px",
  "color : green; font-size: 40px; font-weight:bold",
  "color : blue; font-size: 40px"
);
// ############ Challenge Three ############ //

// ############ Challenge Four ############ //
console.group("Group 1");
console.log("Message one");
console.log("Message two");

console.group("Child Group ");
console.log("Message one");
console.log("Message two");

console.group("Grand Child Group");
console.log("Message one");
console.log("Message two");

console.groupEnd();
console.groupEnd();
console.groupEnd();

console.group("Group 2");
console.log("Message one");
console.log("Message two");
console.groupEnd();
// ############ Challenge Four ############ //

// ############ Challenge Five ############ //
console.table(["ziad", "seif", "mohmed"]);
// ############ Challenge Five ############ //

// ############ Challenge Six ############ //
// console.log("Iam In Console");
/* document.write("Iam In Page");*/
// ############ Challenge Six ############ //
