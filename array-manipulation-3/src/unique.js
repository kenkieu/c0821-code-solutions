/* exported unique */
// input: array
// output: new array only unique elements, same order
// create new outputarr
// look at each item in array input
// if the outputArr does not have the current item
// add to outputarr
// return outputArr

function unique(array) {
  var outputArr = [];
  for (var i = 0; i < array.length; i++) {
    if (!outputArr.includes(array[i])) {
      outputArr.push(array[i]);
    }
  }
  return outputArr;
}
