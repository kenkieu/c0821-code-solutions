// define empty array to store new values
// loop over arraycopy for each item
// for each iteration call the triple function on the current element
// return new arr

function map(array, transform) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(transform(array[i]));
  }
  return output;
}

const tripled = num => num * 3;
const underScoreBetween = word => word.split('').join('_');

console.log('Test 1:', map([0, 1, 2, 3, 4, 5], tripled));
console.log('Test 2:', map(['alleyisbetterthantaicha'], underScoreBetween));
