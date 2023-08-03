function greet(fName, lName) {
  lName = lName ?? "Gopalan"; //!! If the lName is undefined or null it will use the default value otherwisw it will used the argument value
  console.log(`My name is ${fName} ${lName} and I'm ${age} years old`);
}

greet("Manipriyan");
