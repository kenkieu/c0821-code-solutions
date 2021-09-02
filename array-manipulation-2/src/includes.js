/* exported includes */
// input 1: array
// input 2: value to search for
// output: boolean indicating the presence of value at any index of array
// if the array is empty
// return false
// look over each item
// if the current item is the same as the input value
// return true
// return false for the remaining values

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
