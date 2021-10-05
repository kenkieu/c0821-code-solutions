/* exported union */
// input 1: array
// input 2: array
// output: new Array containing unique values from both first and second in the order they appear.
// create storage for outputArr
// look at each item in first array
// if it does not exist in outputArr
// add to outputArr
// look at items in second array,
// if it does not exist in outputArr
// add to outputArr
// return outputarr

function union(first, second) {
  var outputArr = [];
  for (var i = 0; i < first.length; i++) {
    if (!outputArr.includes(first[i])) {
      outputArr.push(first[i]);
    }
  }
  for (var x = 0; x < second.length; x++) {
    if (!outputArr.includes(second[x])) {
      outputArr.push(second[x]);
    }
  }
  return outputArr;
}
