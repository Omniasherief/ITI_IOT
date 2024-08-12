/*
1- Do the following actions on the following HTML elements
    a- Get first anchor inside the second table then change its’ href property to training.com and it’s text to "Training"
    b- Find all images and change its borders to : solid pink 2px
    c- create Javascript function to Find all checkboxes (checked) in userData form and alert their values
    d- Find element with id value "example" then change it’s background color to pink
*/

let secondTable=document.getElementsByTagName("table")[1];
let firstAnchor=secondTable.getElementsByTagName("a")[0];
firstAnchor.href = "https://training.com";
firstAnchor.textContent = "Training";


images = document.querySelectorAll("img");
images.forEach((img) => {
    img.style.border = "solid pink 8px";
});






function alertCheckedValues() {
    const checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkedBoxes.forEach((box) => {
        alert(box.value);
    });
}


const button = document.createElement("button");
button.textContent = "Check Values";


button.onclick = function () {
    alertCheckedValues();
};


document.body.appendChild(button);




const exampleDiv = document.getElementById("example");
exampleDiv.style.backgroundColor = "pink";