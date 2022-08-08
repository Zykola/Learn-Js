// ############ Challenge One ############ //
// let start = 10;
// let end = 100;
// let exclude = 40;

// for (; start <= end; start += 10) {
//   if (start === exclude) {
//     continue;
//   }
//   console.log(start);
// }
// ############ Challenge One ############ //

// ############ Challenge Two ############ //
// let start = 10;
// let end = 0;
// let stop = 3;

// for (; end < start; start -= 1) {
//   if (start < 10) {
//     console.log(`0${start}`);
//     if (start <= stop) {
//       break;
//     }
//   } else {
//     console.log(start);
//   }
// }

// ############ Challenge Two ############ //

// ############ Challenge Three ############ //
// ############ Challenge Three ############ //

// ############ Challenge Four ############ //
// let index = 10;
// let jump = 2;
// let end = 0;

// for (;;) {
//   console.log(index);
//   if ((index == end) | (index == 4)) {
//     break;
//   }
//   index -= jump;
// }
// ############ Challenge Four ############ //

// ############ Challenge Five ############ //
// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";

// for (let i = 0; i < friends.length; i++) {
//   if (friends[i].startsWith(letter.toUpperCase())) {
//     continue;
//   }
//   {
//     console.log(`${i} => ${friends[i]}`);
//   }
// }
// // Output
// ("1 => Sayed");
// ("2 => Eman");
// ("3 => Mahmoud");
// ("4 => Osama");
// ("5 => Sameh");
// ############ Challenge Five ############ //

// ############ Challenge Six ############ //
// let start = 0;
// let swappedName = "elZerO";
// let x = "";

// for (; start < swappedName.length; ++start) {
//   if (swappedName[start] == swappedName[start].toUpperCase()) {
//     x += swappedName[start] = swappedName[start].toLowerCase();
//   } else {
//     x += swappedName[start] = swappedName[start].toUpperCase();
//   }
// }
// console.log(x);
// ############ Challenge Six ############ //

// ############ Challenge Seven ############ //
// let start = 0;
// let mix = [1, 2, 3, "A", "B", "C", 4];

// for (; start < mix.length; ++start) {
//   if ((typeof mix[start] === "string") | (mix[start] == 1)) {
//     continue;
//   }
//   console.log(mix[start]);
// }
// ############ Challenge Seven ############ //

// // ############ Challenge eight ############ //
// let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
// let index = 0;
// let counter = 0;

// while (index < friends.length) {
//   if (friends[index].startsWith("A") | (typeof friends[index] === "number")) {
//     continue;
//   }
//   console.log(friends[index]);
//   ++index;
// }

//############ Challenge eight ############ //
result = [];
function showDetails(...prm) {
  for (let i = 0; i <= prm; ++prm) {
    if (typeof prm[i] === String) {
       (result += prm[i]);
    } else if (typeof prm[i] === Number) {
       (result += prm[i]);
    } else {
       (result += prm[i]);
    }
  }
  console.log
}
