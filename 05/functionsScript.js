printVariables(1, 2, 3);       // b-it works (hoisting)
function printVariables(val1, val2,val3)
{
    if(val3==undefined) val3=1;
      //e- to print all arguments
    /*for (i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);*/


        //console.log(localVar);  //  h let: giver error , var gives undefined
       var localVar=44, testingVar=55; // after deleting let:Uncaught ReferenceError: can't access lexical declaration 'localVar' before initialization
     

    
        // console.log(localVar);   //f-it works as i am in the scope 
        // console.log(testingVar);
    return [val1, val2, val3];

};



//2 // Function expression
//  printVariablesExpression = function (value1, value2, value3) {
     
//   };
  
  
// 3   printVariablesArrow = (value1, value2, value3) => {
//  
//   };


console.log(printVariables(5, 6, 7));

result=printVariables(10,20,30);
console.log(result);             //c
//console.log(val1, val2, val3); //a-it is not defined 

console.log(printVariables(3,5)); // d- Will have undefined for the third value i solved it with  if(val3==undefined) val3=1; or i can give initial values in function 


const resultMoreArgs = printVariables(11, 22,33,4,55,6);
console.log(resultMoreArgs); //e-it takes just 3


// console.log(localVar); //g-Uncaught ReferenceError: localVar is not defined
// console.log(testingVar);//Uncaught ReferenceError: localVar is not defined out side of scopes

//h-
 let localVar = 90;
 console.log(localVar); // 90

 printVariables(1, 2, 3);
 console.log(localVar); 






 // second
 const sum = (a, b) => {
    if (arguments.length < 2) {
      console.log('Function requires at least two arguments');
      return;
    }
  
    if (!Number.isFinite(a) || !Number.isFinite(b)) 
        return 'Both arguments must be numbers';
  
    return a + b;
  };
  
  const ANS = sum(3, 4);
  console.log(ANS);
 /*
 const sum = (...args) => {
    if (args.length < 2) {
      console.log('Function requires at least two arguments');
      return;
    }
  
    const [a, b] = args;
  
    if (typeof a !== 'number' || typeof b !== 'number') {
      console.log('Both arguments must be numbers');
      return;
    }
  
    return a + b;
  };
  
  const ANS = sum(3, 4);
  console.log(ANS);
  
*/
    

