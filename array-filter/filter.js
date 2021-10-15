// create empty array
// loop to look at each item of array
// do work in the loop
// check if item matches filter criteria
// calling predicate on each element of the array
// if true push current element into output

function filter(array, predicate) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      output.push(array[i]);
    }
  }
  return output;
}

console.log(filter([0, 1, 2, 3, 4, 5, 6, 7, 8], number => number > 5));
