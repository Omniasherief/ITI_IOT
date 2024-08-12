// let ul = document.getElementById("firstUl");

// let lis = document.getElementsByTagName("li")[0];
// lis.innerText = "red";

// let li = document.getElementsByClassName("li");
// let input = document.getElementsByName("inp")[0];

// let input = document.querySelector("li span");
// let input1 = document.querySelectorAll("li");

// console.log(input);
// console.log(input1);

// let a = document.getElementById("a1");
// a.href = "https://www.google.com";
// a.innerText = "GOOGLE";

// let img = document.querySelector("img");
// img.src = "flower.jpg";
// img.alt = "Image not found";

// let ul = document.getElementById("firstUl");

// ul.setAttribute("class", "hamada");

// ul.removeAttribute("id");
// console.log(ul);

// let txt = document.getElementById("txt1");
// let span = document.getElementsByTagName("span")[0];
// function checkNum() {
//   let txtval = txt.value;

//   if (isFinite(txtval)) {
//     console.log("number");
//     span.style.display = "none";
//   } else {
//     span.style.display = "inline";
//     console.log("error");
//   }
// }
let tableBody = document.querySelector("table").tBodies[0];
let inputs = document.getElementsByName("form1");
function checkNum() {
  let tr = document.createElement("tr");

  for (let i = 0; i < inputs.length + 1; i++) {
    let td = document.createElement("td");
    let button = document.createElement("button");

    button.innerText = "DELETE";

    if (i >= 3) {
      td.appendChild(button);
    } else {
      td.innerText = inputs[i].value;
    }

    button.onclick = function () {
      tableBody.removeChild(this.parentNode.parentNode);
    };

    tr.appendChild(td);
  }

  tableBody.appendChild(tr);
}
// let newItem = document.createElement("tr");
// let td = document.createElement("td");
// newItem.appendChild(td);
// tableBody.insertBefore(newItem, tableBody.children[0]);
