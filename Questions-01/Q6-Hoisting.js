//! Q-06 : Explain What is Hoisting in javascript and how it works for variables and functions. Create examples that demonstrate the behavior of hoisting for both variables and functions declarations


//? Hoisting : It is a feature in JS that automatically moves all the declarations to the top of the scope / block
//? Hoisting in Variables : let , const and var
/*
* var : is global scoped variable - can be used to accessed through out the whole code 
* let and Const : are local scoped variables - can be used or accessed within the scope it declared

? var & let : They can be declared without initialization - example : let a ; and  var b ;
? const : it can be declared without initialization - Example : const a [ wrong - error] , const a = 5 ; [ correct ]


*/

//* let
let a = 4;
console.log(a); // 4

let ab;
console.log(ab); // undefined

//! console.log(b) // error - can't access before initialization
// let b ;
// let b =2  ;

//* Var
console.log(d);
var d; // undefined

var e;
console.log(e); // undefined

var f = 3;
console.log(f); // 3

//* Const
//! const ac ; // error - missing initialization in const declaration
const ad = 4;
console.log(ad); // 4

//! console.log(ae); // error - cannot access before initialization
const ae = 5;

//? Hoisting in function :  in this let const and var all 3 are local scoped - only used inside the function
//* function

function sum() {
  let one = 1;
  var two = 2;
  const three = 3;
  console.log(one + two + three); 
}
sum(); // 6 

// console.log(one); //! error - one is not defined -> [ missing initialization in function declaration]
// console.log(two); // not executed
// console.log(three); // not executed
//! for all the 3 console we get an error - "one" is not defined
//? because - Js is single threaded - it reads the code line by line - and at any point it gets error - it stop their execution

//* we can call the function before initialization
sumOfThreeNumbers(); // 6
function sumOfThreeNumbers() {
  let one = 1;
  var two = 2;
  const three = 3;
  console.log(one + two + three);
}


// for more understanding - learn more about - GEC 
//? GEC - Global Execution Context 
/*
* it has 2 parts - variable phase and Execution  Phase 
? Variable phase : also called- Memory Creation/Allocation Phase
* -> in this phase - find the variable declaration statements and allocate the memory to the variables 

? Execution Phase : Executed the whole code  - Final Phase 
* Finds 
? variable initialization
? console statements
? Function Statement

* for every function statements -> it creates new GEC that is called child GEC 
* Child GEC have an access to the variables of the Parent GEC but, Vice verse is not allowed 

* after the completion of both the phases , it get garbage collected
? Garbage Collection : it is a process in which firstly find the variables that are not in used then deallocate their memory automatically 
? Garbage Collector : it is a component of the js Engine that are responsible for performing garbage collection

*/