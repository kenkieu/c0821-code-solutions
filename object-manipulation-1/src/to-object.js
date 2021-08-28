/* exported toObject */
// input: array with key value pair
// output: object with property value pair
// store value of input at pos 0
// store value of input at pos 1
// create a container for output
// set property of container to value
// return output

function toObject(keyValuePair) {
  var property = keyValuePair[0];
  var value = keyValuePair[1];
  var obj = {};
  obj[property] = value;
  return obj;
}
