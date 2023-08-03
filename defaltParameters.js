function greet(fName = "Manipriyan", lName, age, fullName = `${fName} ${lName}`) {
  console.log(`My name is ${fullName} and I'm ${age} years old`);
}

greet(undefined, "Gopalan", 25);
