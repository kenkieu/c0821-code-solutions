function reduce(array, reducer, initialValue) {
  let output = initialValue;
  for (let i = 0; i < array.length; i++) {
    output += reducer(initialValue, array[i]);
  }
  return output;
}

const reducer = (acc, cur) => acc + cur;

console.log(reduce([1, 2, 3, 4, 5], reducer, 0));
