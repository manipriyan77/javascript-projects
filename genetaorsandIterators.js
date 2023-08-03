// generator
// can't use arrow functions
function* simpleGenerator() {
  yield 1; //similar like async await
  yield 2; //similar like async await
  yield 3; //similar like async await
}

const generator = simpleGenerator();
console.log(generator);
// to start the generator
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

function* fibonacciGenerator() {
  let prevOne = 0;
  let prevTwo = 1;
  yield 0;

  while (true) {
    const result = prevOne + prevTwo;
    yield result;
    prevOne = prevTwo;
    prevTwo = result;
  }
}

function* idGenerator() {
  let initialId = 0;
  while (true) {
    yield initialId++;
  }
}

const generatorId = idGenerator();
console.log(generatorId.next());
console.log(generatorId.next());
console.log(generatorId.next());
console.log(generatorId.next());

// to start a new Generator
const generatorId2 = idGenerator();
console.log(generatorId2.next());
