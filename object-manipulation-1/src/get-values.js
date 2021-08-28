/* exported getValues */
// input: object
// output: array of object property values
// create storage for output
// check each object's variables for values
// move to output
// return output

function getValues(object) {
  var objValues = [];
  for (var value in object) {
    objValues.push(object[value]);
  }
  return objValues;
}
