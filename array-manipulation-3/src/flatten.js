/* exported flatten */
// input: array
// output: new array with any direct child arrays unwrapped
// look over items in array
// if current item is not array then put item in newArr
// otherwise is item is array
// look at all items inside and put into newArr
// return newArr

function flatten(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      newArr.push(array[i]);
    } else {
      for (var x = 0; x < array[i].length; x++) {
        newArr.push(array[i][x])
      }
    }
  }
  return newArr;
}
