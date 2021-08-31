/* exported takeRight */
// input 1: array
// input 2: count
// output: new array with last count elements of array
// create storage for new array
// if array is empty return an empty array
// look at items in input arr, start at value of length - count
// move items into array storage
// return array storage

function takeRight(array, count) {
  var arr = [];
  if (array.length === 0) {
    return arr;
  }
  for (var i = array.length - count; i < array.length; i++) {
    arr.push(array[i])
  }
  return arr;
}
