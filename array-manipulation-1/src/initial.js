/* exported initial */
// input: array
// output: new array with all but last item

// new storage for output
// check items
// set endpoint to -1 of the length
// move items in output
// return new output

function initial(array) {
  var arr = [];
  for (var i = 0; i < array.length - 1; i++) {
    arr.push(array[i]);
  }
  return arr;
}
