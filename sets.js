// const set = new Set([1, 2, 3, 4, 4, 4]);
// console.log(set);
// set.add(6);

// // we can't able to get inidividual values like set[0]
// console.log(set);
// // to check if the set has some value
// console.log(set.has(6)); // true
// // To delete a value
// set.delete(3); // {1,2,4,6}
// console.log(set.size());
// set.clear();

// // remove duplicates

// function removeDuplicates(arr) {
//   const set = new Set(arr);
//   return [...set];
// }

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 5, 6, 7]));

// Set is a collection of unique values
const orderSet = new Set(["Pizza", "Pizza", "Rice", "Dal", "Milk"]);
console.log(orderSet);
console.log(new Set("manipriyan"));

console.log(orderSet.size);
// to check certain element
console.log(orderSet.has("Pizza"));
// to add
orderSet.add("Bread");
orderSet.add("Bread");
console.log(orderSet);
// to delete
orderSet.delete("Bread");

for (const order of orderSet) {
  console.log(order);
}
