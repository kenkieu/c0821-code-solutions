/* exported pick */
// input 1: object
// input 2: strings
// output: A new Object containing all of the properties of source listed in keys If key is
// create storage for new obj
// look at each item in keys array input
// look over each item in source input
// if the key inputs value is the same as the keys inputs, and the value of the source is not undefined
// set the property and value of the source input to new obj
// return new obj

function pick(source, keys) {
  var outputObj = {};
  for (var i = 0; i < keys.length; i++) {
    for (var key in source) {
      if (key === keys[i] && source[key] !== undefined) {
        outputObj[key] = source[key];
      }
    }
  }
  return outputObj;
}
