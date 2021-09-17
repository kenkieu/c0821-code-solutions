/* exported zip */
// input 1: array
// input 2: array
// output: An Array of Arrays
// create outputArr
// check each item for first input
// inside first input check, check if second input items
// create subArr
// if i is the same as x
// push first item at that position into subArr
// push second item at that position into subArr
// push subArr into outputArr
// return outputArr

function zip(first, second) {
  var outputArr = [];
  for (var i = 0; i < first.length; i++) {
    for (var x = 0; x < second.length; x++) {
      var subArr = [];
      if (i === x) {
        subArr.push(first[i])
        subArr.push(second[i])
        outputArr.push(subArr);
      }
    }
  }
  return outputArr;
}
