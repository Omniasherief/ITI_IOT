function convertToPascalCase(str)
{
    return str.split(" ").map(word=>word.charAt(0).toUpperCase()+word.slice(1).toLowerCase()).join(" ");

}
console.log(convertToPascalCase('the quick brown fox'));




function findLongestWord(str)
{
    let word=str.split(" ");
    let long=word[0];
    for(let i=1;i<word.length;i++)
        {

            if(word[i].length>long.length)
                long=word[i];
        }
   return long;
}
console.log(findLongestWord('Web Development Tutorial'));




function orderAlphabetical(str)
{
    return str.split("").sort().join("");

}
console.log(orderAlphabetical('javascript')); 



function generateRandomArray(length)
{
    if (length<1 || length>10)
        return "Length must be between 1 and 10";

    let RandomArr=[];
    for (let i = 0; i < length; i++) {
        RandomArr.push(Math.random() * 10) ;
    }
    return RandomArr;
}
let length =prompt('Enter the length of the array (1-10):');
console.log(generateRandomArray(length));


function getUserDetails()
{
let username=prompt("Enter Yout Name");

while(!username)
    username=prompt("Name cannot be empty ,Enter it Again");

let grades=prompt("Enter your grades separated like  like 90,50,30,10 ");
let vaildgrades=grades.split(",").map(Number).filter(grade => !isNaN(grade));

while (vaildgrades.length !== grades.split(',').length) {
    grades = prompt('Please enter valid numbers only, separated by commas:');
    vaildgrades = grades.split(',').map(Number).filter(grade => !isNaN(grade));
}

let averageGrade = vaildgrades.reduce((sum, grade) => sum + grade, 0) / vaildgrades.length;

console.log(`Welcome, ${username}!`);
console.log(`Your average grade is: ${averageGrade.toFixed(2)}`);
}
getUserDetails();