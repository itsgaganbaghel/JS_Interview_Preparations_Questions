//! Q-02 :  create a vehicle constructor function that initializes make and model properties. then, create a car constructor function that extends the vehicle and adds a year property. create an instance of car and access its properties and methods and then
//? explain how prototypal inheritance works in javascript


//? what is prototypal inheritance :
//* It is a feature in js, where objects can inherit properties and methods from other objects by using "prototype"
//? Prototype : it is serve as a blue print of the object for creating new objects

//* How prototypal inheritance works

// //? Step 1
// // * Create a constructor function - vehicle
// function vehicle(make, model) {
//   this.make = make;
//   this.model = model;
// }

// //? Step 2
// //* create a constructor function - car
// function car(make, model, year) {
//   vehicle.call(this, make, model);
//   //* call the vehicle constructor function and specify that  "make"  and "model" properties should added to the car constructor function

//   this.year = year;
// }

// //? Step 3
// // * Prototype chaining setup -

// //? It creates new blank oject with vehicle.prototype as its own prototype and assign it to car.prototype
// //* now any instance of car will have vehicle's prototype as its prototype
// car.prototype = Object.create(vehicle.prototype);
// //! but this vehicle.prototype - overwrite the prototype properties of car

// //* and for resolving the overwriting ,
// car.prototype.construct = car;
// //? the above line of code point back to the function itself
// //* The constructor function property are useful to identify which constructor function create an instance

// //? Step 4
// const newCar = new car("Toyota", "Corolla", 2020);
// console.log(newCar);

//* code :

function vehicle(make, model) {
  this.make = make;
  this.model = model;
}

function car(make, model, year) {
  vehicle.call(this, make, model);
  this.year = year;
}
car.prototype = Object.create(vehicle.prototype);
car.prototype.construct = car;

const newCar = new car("Toyota", "Corolla", 2020);
console.log(newCar);
