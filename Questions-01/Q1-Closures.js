//! Q-01 : Write a function createIncrement that returns another function. The returned function should increment a value and return it ,
//? Explain how the closure works and why it is important in javascript.

/*
* closures in JS 

In JavaScript, closures is a function  that retains access to the lexical scope,
event when the outside function  of the scope is executed .
therefore, 
we can say that , closures are the type of a function in which 
the values of the outer function are retained and accessible for the 
inner function even after the successful execution of the outer function

? during the time of its creation , it captures the variables from its lexical scope
? i.e., The return function retains the access to the scope in which it was created 
? even if the outer function is executed successfully, the inner function can still access the variables of the outer function

! example 
 */
function createIncrement() {
  let num = 9;
  return function () {
    num = num + 1;
    return num;
  };
}

const call = createIncrement(); //* it contains the function that is returned by outer function

console.log(call()); //* output = 10

//? why closures are important in js -
//* because - it helps to access the variables of the outer functions even after complete execution of the outer function
//* it helps in - curring and data encapsulation

//! currying - convert the complex or whole function into a single operation functions
