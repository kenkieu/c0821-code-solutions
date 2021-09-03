/* exported pick */
// input 1: object
// input 2: strings
// output: A new Object containing all of the properties of source listed in keys If key is
// create storage for new obj
// look at each item in keys
// look at items in source input
// if the source input value is the same as the keys input at the specified i
// set the property and value of the source input to new obj
// return new obj

function pick(source, keys) {
  var obj = {};
  for (var i = 0; i < keys.length; i++) {
    for (var key in source) {
      if (key === keys[i]) {
        obj[key] = source[key];
      }
    }
  }
  console.log(obj);
  return obj;
}
