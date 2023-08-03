const sym = Symbol("Name");
const sym2 = Symbol("Name");

console.log(sym);
console.log(sym === sym2);

const person = {
  age: 25,
  [sym]: "Manipriyan",
};

console.log(person);
