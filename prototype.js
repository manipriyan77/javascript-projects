function Person(name, age) {
  this.name = name;
  this.age = age;
  this.printName = function () {
    console.log(this.name);
  };
}

let person = new Person("manipriyan", 25);
console.log(person);
console.log(Object.getPrototypeOf(person));
const arr = ["name", "age"];
console.log(arr);

console.log(Object.getPrototypeOf(arr));
console.log(arr.__proto__);
console.log(Object.getPrototypeOf(arr) === arr.__proto__);

// to create a prototype without affecting the performance

const dragon = {
  name: "Tanya",
  fire: true,
  attack: function () {
    return 10;
  },
};

const newDragon = Object.create(dragon);
newDragon.name = "Mani";
console.log(newDragon.name, dragon.name);

// !!Spread and Rest operator

const arr1 = [1, 2, 3];
const numberArray = [1, 2, 3, 4, 5, 6];
const personObject = {
  name: "Manipriyan",
  age: 25,
  address: {
    street: "123 Main st",
    city: "chennai",
  },
  job: "Developer",
};

// Rest operator takes a number of values and convert it to an array
function sum(...numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
}
console.log(sum(10, 7, 8, 9));

// spread operator takes array of values and spread it into single values
console.log(sum(...numberArray));
sum(numberArray);

const newArray = [...numberArray];

const divs = document.querySelectorAll("section");
console.log(divs); // nodelists are not an array
[...divs].map((div) => {
  console.log(div);
});

const { name, age, ...rest } = personObject;

console.log(name, age, rest);
const personObject2 = { ...personObject };
personObject2.name = "Hari";
console.log(personObject2, personObject);

const details = {
  hooby: "Workout",
  favColor: "Blue",
};

const detailedPerson = { ...personObject, ...details };
console.log(detailedPerson);
