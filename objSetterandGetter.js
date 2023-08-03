const person = {
  fname: "Manipriyan",
  lName: "GS",
  get fullName() {
    //get function should not take any paraments
    return `${this.fname} ${this.lName}`;
  },
  set fullName(value) {
    // [this.fname, this.lName] = value.split(" ");
    const nameArray = value.split(" ");
    this.fname = nameArray[0];
    this.lName = nameArray[1];
  },
};

person.fullName = "Manipriyan GS";

console.log(person.fullName);

const person2 = {
  age: 25,
  get getBirthYear() {
    return new Date().getFullYear() - this.age;
  },
};

console.log(person2.getBirthYear);
