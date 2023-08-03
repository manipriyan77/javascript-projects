const person = {
  name: "Manipriyan",
  age: 25,
  address: { street: "Annai avenue", city: "chennai" },
  sayHi() {
    console.log("Hi");
  },
};

function printStreet(personObj) {
  //   console.log(person.address.street);
  console.log(personObj?.address?.street);
}

function sayHiFun(personObj) {
  //   console.log(person.address.street);
  console.log(personObj?.sayHi?.());
}

printStreet(person);
sayHiFun(person);
