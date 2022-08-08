// ############ ChallengeOne ############ //
// CREATE FILE JSON
// ############ ChallengeOne ############ //

// ############ ChallengeTwo ############ //
// let myRequest = new XMLHttpRequest();
// myRequest.open("GET", "articles.json");
// myRequest.send();
// myRequest.onreadystatechange = function () {
//   console.log(myRequest.readyState);
//   if (this.readyState === 4 && this.status === 200) {
//     console.log(this.responseText);
//   }
//   myRequest.onload = function () {
//     console.log("Data Loaded");
//   };
// };
// ############ ChallengeTwo ############ //

// ############ ChallengeThree ############ //
// let myRequest = new XMLHttpRequest();
// myRequest.open("GET", "articles.json");
// myRequest.send();

// myRequest.onreadystatechange = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     let mainData = JSON.parse(this.responseText);
//     for (let i = 0; i < mainData.lenght; i++) mainData[i].category = "All";
//     console.log(mainData);
//     console.log("#".repeat(60)); // Just a separator
//     let updatedData = JSON.stringify(mainData);
//     console.log(updatedData);
//   }
// };
// ############ ChallengeThree ############ //

// ############ ChallengeFour############ //
let myRequest = new XMLHttpRequest();
myRequest.open("GET", "articles.json");
myRequest.send();

myRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let JsData = JSON.parse(this.responseText);

    let div1 = document.createElement("div");
    div1.id = "data";
    for (let i = 0; i < JsData.length; i++) {
      let div = document.createElement("div");
      let h2 = document.createElement("h2");
      let p1 = document.createElement("p");
      let p2 = document.createElement("p");
      let p3 = document.createElement("p");

      h2.innerHTML = `${JsData[i].title}`;
      p1.innerHTML = `${JsData[i].body}`;
      p2.innerHTML = `${JsData[i].category}`;
      p3.innerHTML = `${JsData[i].author}`;

      div.appendChild(h2);
      div.appendChild(p1);
      div.appendChild(p2);
      div.appendChild(p3);
      div1.appendChild(div);
    }
    document.body.appendChild(div1);
  }
};
// ############ ChallengeFour############ //
