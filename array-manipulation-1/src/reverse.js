/* exported reverse */
// input: array
// output: new output in reverse
// create storage for output
// check items of array starting from end to start
// move each item to new output
// return new output

function reverse(array) {
  var reversed = [];
  for (var i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
  }
  return reversed;
}
