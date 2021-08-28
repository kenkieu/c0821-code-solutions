/* exported tail */

// input: any array
// output: new array with elements after first

// create storage for output
// look at items starting at second item
// push all items from that point
// return new output

function tail(array) {
  var arr = [];
  for (var i = 1; i < array.length; i++) {
    arr.push(array[i]);
  }
  return arr;
}
