import uniq from "https://deno.land/x/lodash@master/uniq.js"
import sortBy from "lodash-sortBy" // This is not supported yet https://deno.land/manual/linking_to_external_code/import_maps

// uniq
let numbers = [2,1,3,5,3,2,1,4,2]
numbers = uniq(numbers)
console.log(numbers)

// sortBy
let users = [
  { name: "a", age: 30 },
  { name: "b", age: 45 },
  { name: "c", age: 12 },
  { name: "d", age: 7 }
];
users = sortBy(users)
console.log(users)
