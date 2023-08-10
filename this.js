"use strict";
// method example
// const jonas = {
//   name: "Jonas",
//   year: 1998,
//   calcAge: function () {
//     return 2037 - this.year;
//   },
// };

// jonas.calcAge();

// // function call
// function myName() {
//   console.log(this);
// }
// myName();

// // arrow functions
// const arrowFunction = () => {
//   console.log(this, "arrow");
// };
// arrowFunction();

// const arrowObject = {
//   name: "Manipriyan",
//   arrow: () => {
//     console.log(this);
//   },
// };
// arrowObject.arrow();
// // Event listener
// document.querySelector("button").addEventListener("click", function () {
//   console.log(this, "event"); // point to the button element
// });

//This keyword in action

console.log(this);

const calcAge = function (birthYear) {
  console.log(2023 - birthYear);
  console.log(this); //undefined because we are in strict mode
};
calcAge(1998);

const calcAgeArrow = (birthYear) => {
  console.log(2023 - birthYear);
  console.log(this, "arrow"); //window because arrow function doesn't get the default this keyword so it uses the this keyword of the parent scope
};
calcAgeArrow(1998);

const arrowObject = {
  name: "Manipriyan",
  calcAgeObj: function () {
    console.log(this);
  },
};
arrowObject.calcAgeObj();

// !!never use arrow function as a method
