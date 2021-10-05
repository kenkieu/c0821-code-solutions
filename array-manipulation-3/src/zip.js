/* exported zip */
// input 1: array
// input 2: array
// output: An Array of Arrays
// find the shorter array and store it into a variable shortArr
// create outputArr
// check each item of the shortArr
// create subArr
// push first item at that position into subArr
// push second item at that position into subArr
// push subArr into outputArr
// return outputArr

function zip(first, second) {
  if (first.length > second.length) {
    var shortArr = second;
  } else {
    shortArr = first;
  }
  var outputArr = [];
  for (var i = 0; i < shortArr.length; i++) {
    var subArr = [];
    subArr.push(first[i]);
    subArr.push(second[i]);
    outputArr.push(subArr);
  }
  return outputArr;
}
