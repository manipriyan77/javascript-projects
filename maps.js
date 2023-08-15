// // method 1 without maps
// const CURRENCY_MAP = {
//   "United States": "USD",
//   India: "Rupee",
// };

// const currency = CURRENCY_MAP["India"];

// // using map
// //using map the key can be anything whereas
// //in object the keys can only be a string
// const map = new Map([
//   [{ a: 1 }, "USD"],
//   ["India", "Rupee"],
// ]);
// console.log(map);

// const user = {
//   name: "Manipriyan",
// };

// const userMap = new Map([[user, { age: 25 }]]);
// console.log(userMap);
// // to get a value from map
// console.log(userMap.get(user));

const dummyObj = {
  name: "Manipriyan",
  age: null,
  address: {
    street: "adas",
    state: "Tn",
    pin: null,
    permanentAddress: {
      street: "adas",
      state: "Tn",
      pin: null,
    },
  },
};

function findNullKeys(obj, prefix = "") {
  const result = [];

  for (const [key, value] of Object.entries(obj)) {
    if (value === null) {
      result.push(key);
    } else if (typeof value === "object" && value !== null) {
      result.push(...findNullKeys(value, prefix + key + "."));
    }
  }

  return result;
}

const nullKeys = findNullKeys(dummyObj);
console.log(nullKeys);

const question = new Map([
  ["question", "Best programming language??"],
  [1, "C"],
  [2, "Java"],
  [3, "Javascript"],
  ["correct", 3],
  [true, "correct"],
  [flase, "Try again"],
]);

console.log(question);

// Convert an object to an Map

// const hoursMao = new Map(Object.entries(openingHours));

// Convert map to an array
const newArrayValue = [...question];
