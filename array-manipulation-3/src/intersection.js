/* exported intersection */
// input 1: array
// input 2: array
// output: new array, unique items found in both first and second
// storage for outputArr
// look over each item in the first input
// if first current item shares the same value from second
// add current item of first to outputarr
// return outputarr

function intersection(first, second) {
  var outputArr = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      outputArr.push(first[i]);
    }
  }
  return outputArr;
}
