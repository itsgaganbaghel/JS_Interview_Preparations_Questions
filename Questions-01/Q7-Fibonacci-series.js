//! Q-07 :writ a generator function FibonacciGenerator that generates the fibonacci sequence up to a  given number. Implement a way to iterate over the generated values using the next() method.  and  
//? Explain the concept of generators and iterators in JavaScript

//? Fibonacci sequence : 0 1 1 2 3 5 8 13 21
//* sum of last 2 values is the next value
//* Simple Way
// function fibonacciGenerator(n) {
//   let a = 0;
//   let b = 1;
//   let newValue;
//   let result = [];
//   result.push(a, b);

//   for (let i = 0; i < n; i++) {
//     newValue = a + b;
//     if (newValue < n) {
//       a = b;
//       b = newValue;
//       result.push(newValue);
//     }
//   }
//   return result;
// }

//? By using Generator and iterator
function* fibonacciGenerator(GivenNumber) {
  let a = 0,
    b = 1;
  while (a <= limit) {
    yield a;
    [a, b] = [b, a + b];
  }
}

//* Using the generator function to iterate over the fibonacci sequence
const GivenNumber = 100; //* Set the limit up to which the Fibonacci sequence should be generated

const fibGen = fibonacciGenerator(GivenNumber);

let result = fibGen.next();
while (!result.done) {
  console.log(result.value); //* log the current fibonacci number
  result = fibGen.next(); //* move to the next fibonacci number
}

/*

? Generators and Iterators in JavaScript
* Generators and iterators are powerful features in JavaScript that provide a way to define and use sequences of values lazily, one at a time, on-demand. They are particularly useful for working with large data sets or implementing custom iteration protocols

?Iterators
* An iterator is an object that defines a sequence and potentially a return value upon its completion.

? Iterator Protocol: An object is considered an iterator when it implements a next() method. This method returns an object with two properties:
* value: The next value in the sequence.
* done: A boolean indicating whether the sequence has been completed (true if it is finished, false otherwise).

? Generators
* A generator is a special type of function that can pause its execution and resume later, allowing it to produce a sequence of values lazily. Generators are defined using the function* syntax, and they use the yield keyword to produce values.

? Generator Function: Defined with function* syntax.
? Yield Keyword: Pauses the function execution and returns the specified value. Execution can be resumed later from where it was paused.
*/
