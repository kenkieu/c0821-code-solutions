/* exported difference */
// input 1: array
// input 2: array
// output: A new Array containing the symmetric difference between first and second
// create two storage arrays for the unique characters
// look at each item in the first input
// if there are any unique items from first that are not in second
// add the item(s) firstarr
// look at each item in the second input
// if there are any unique items from the second input, not in the first array
// add the item(s) to the secondarr
// create a variable to store the merge of the two sub arrays
// return the outputarr

function difference(first, second) {
  var firstArr = [];
  var secondArr = [];

  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) === -1) {
      firstArr.push(first[i])
    }
  }
  for (var x = 0; x < second.length; x++) {
    if (first.indexOf(second[x]) === -1) {
      secondArr.push(second[x]);
    }
  }
  var outputArr = firstArr.concat(secondArr)
  return outputArr;
}
