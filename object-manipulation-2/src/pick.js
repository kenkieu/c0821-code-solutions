/* exported pick */
// input 1: object
// input 2: strings
// output: A new Object containing all of the properties of source listed in keys If key is
// create storage for new obj
// obtain each key in obj
//
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
