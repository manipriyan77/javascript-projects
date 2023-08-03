window.name = "Global name";

const person = {
  name: "Manipriyan",
};

function printName() {
  console.log(this.name);
}

printName(); // "Global name"

// we are binding the this to the person obj instead of the window object
const newPrintName = printName.bind(person);

function sum(a, b) {
  return a + b;
}
console.log(sum(7, 7));

// the first parameter to the bind is the this keyword and the other arguments following those are arguments to that function
const sumTwo = sum.bind(null, 2);
// the above function looks like this
// function sumTwo (b){return 2+b}
console.log(sumTwo(3));

function product(a, b) {
  return a * b;
}

const numbers = [1, 2, 3, 4, 5];
const newNumber = numbers.map(product.bind(null, 2));
console.log(newNumber);

const myName = {
  name: "Hari",
  name() {
    return (this.name = "Mani");
  },
};
console.log(person, "person");

myName.name.bind(person);
console.log(person, "after");
