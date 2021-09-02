/* exported pick */
// input 1: object
// input 2: strings
// output: A new Object containing all of the properties of source listed in keys If key is
// create storage for new obj
// obtain each key in obj
//
function pick(source, keys) {
  console.log(keys[0]);
  var obj = {};
  var counter = 0;
  for (var key in source) {
    console.log(key);
    if (key === keys[counter]) {
      obj.key = source[key];
      counter++;
    }
  }
  // console.log(obj);
  return obj;
}
