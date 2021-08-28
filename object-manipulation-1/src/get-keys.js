/* exported getKeys */
// input: object
// output: array of object's property keys
// create storage for output
// check for property names in object
// move property names to output
// return output

function getKeys(object) {
  var keysArr = [];
  for (var keys in object) {
    keysArr.push(keys);
  }
  return keysArr;
}
