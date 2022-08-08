// ########## ChallengeOne ########## //
let day = "   friday  ";
day = day.trim();
day = day.slice(0, 1).toUpperCase() + day.slice(1);

switch (day) {
  case "Friday" || "Saturday" || "Sunday":
    console.log("No Appointments Available");
    break;
  case "Monday" || "Monday":
    console.log("From 10:00 AM To 5:00 PM");
    break;
  case "Tuesday":
    console.log("From 10:00 AM To 7:00 PM");
    break;
  case "Wednesday":
    console.log("From 10:00 AM To 7:00 PM");
    break;
  default:
    console.log("Its Not A Valid Day");
}
// ########## ChallengeOne ########## //

//Challenge
// let job = "";
// let salary = 0;
// switch (job) {
//   case "Manager":
//     salary = 8000;
//     console.log(salary);
//     break;
//   case "IT":
//   case "Support":
//     salary = 6000;
//     console.log(salary);
//     break;
//   case "Developer":
//   case "Designer":
//     salary = 7000;
//     console.log(salary);
//   default:
//     salary = 4000;
//     console.log(salary);
// }