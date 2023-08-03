// method 1 without maps
const CURRENCY_MAP = {
  "United States": "USD",
  India: "Rupee",
};

const currency = CURRENCY_MAP["India"];

// using map
//using map the key can be anything whereas
//in object the keys can only be a string
const map = new Map([
  [{ a: 1 }, "USD"],
  ["India", "Rupee"],
]);
console.log(map);

const user = {
  name: "Manipriyan",
};

const userMap = new Map([[user, { age: 25 }]]);
console.log(userMap);
// to get a value from map
console.log(userMap.get(user));
