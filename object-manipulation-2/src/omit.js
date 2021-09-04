/* exported omit */
// input: Object
// input: Array of strings
// output: new object with all properties that aren't listed in keys
// create storage for new obj
// look over each item in keys array input
// if there is no value in source for that property
// assign value to outputObj property
// return outputObj

function omit(source, keys) {
  var outputObj = {};
  for (var i = 0; i < keys.length; i++) {
    console.log(source[keys[i]]);
    console.log(keys[i]);
    console.log(source[keys]);
    if (!source[keys[i]]) {
      outputObj[keys[i]] = source[keys];
    }
  }
  return outputObj;
}
