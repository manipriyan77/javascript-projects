const firstName = "Manipriyan";
const age = 25;
// const sayHi = function () {
//   console.log("Hi");
// };

// const person = {
//   firstName: firstName,
//   age: age,
//   sayHi: sayHi,
// };

// Instead of the above approach we can

const person = {
  firstName, //firstName :firstName
  age, //age:age
  sayHi() {
    console.log("Hi");
  }, //sayHi: function (){....}
};
// const native = "Kaniyakumari";
// person["native"] = "Kaniyakumari";
const propertyName = "native";
const native = "Kaniyekumari";
person[propertyName + 1] = native;

console.log(person);
