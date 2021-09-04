
/* exported omit */
// input: Object
// input: Array of strings
// output: new object with all properties that aren't listed in keys
// create storage for new obj
// look over each key in source input
// store a boolean set to false by default
// look at each item in keys input
// if the current key is equal to the key of the source
// set key exists to true
// if key exists is false
// add the property and assign it's value to the new obj
// return the new obj

function omit(source, keys) {
  var outputObj = {};
  for (var key in source) {
    var keyExists = false;
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === key) {
        keyExists = true;
      }
    }
    if (keyExists === false) {
      outputObj[key] = source[key];
    }
  }
  return outputObj;
}
