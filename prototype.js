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
