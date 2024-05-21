//! Q-04 : write a function map that takes an array and a callback function as argument. The map function should apply the callback function to each element in the array and  return a new array with the transformed elements.  
//? Explain the concept of HOF and their use Cases.

function map(array, callback) {
  //* by using simple for loop
  //   const newArray = [];
  //   for (let i = 0; i < array.length; i++) {
  //     newArray.push(callback(array[i]));
  //   }
  //* by using forEach loop
  //   array.forEach((element) => {
  //     newArray.push(callback(element));
  //   });
  //* by using map
  const newArray = array.map((v) => callback(v));
  return newArray;
}
function callbackFunction(element) {
  return element * 2;
}

const arr = [1, 2, 3, 4, 5];
const double = map(arr, callbackFunction);

console.log(double);

//? what is high Order Function in JS
/* 
High Order Function are the type of functions in js in which we can pass a callback function as an argument or it can return the callback function
? callback function : it is a type of function that pash inside another function for performing some task or routine work parallel to the main code 
//* in most of the cases , the High Order function depends to the output of the callback function
*/

/*
* A higher-order function is a function that either:

? Takes one or more functions as arguments, or
? Returns a function as its result.
*/

/*
* use- cases of high order functions
1.Array manipulation - [ map , filter and reduce]
2. function composition - It  can be used to combine multiple functions into a single function that performs a sequence of operations.
3. currying 
4. Debouncing and Throttling
? Debouncing - a function is called some task after a specified delay 
? Throttling - a function is called at most every specified interval
5. Event handling - one event is depend on another event 
*/
