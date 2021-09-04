/* exported invert */
// input: object
// output: new object with inverted values
// create storage for new object
// look at each of the keys in source
// set storage for values of source
// assign the key to the property to inverse
// return new object

function invert(source) {
  var outputObj = {};
  for (var key in source) {
    var value = source[key];
    outputObj[value] = key;
  }
  return outputObj;
}
