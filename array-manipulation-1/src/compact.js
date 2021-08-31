/* exported compact */

/*
omits list:
false
null
NaN
0 -0
undefined
""
maintains order of truthy values
*/

// input: array
// output: array of truthy values in order
// create storage for output
// check each item of array start to end
// if value is not false, null 0, NaN or undefined
// move value to output
// return output

// function compact(array) {
//   var truthyArr = [];
//   for (var i = 0; i < array.length; i++) {
//     if (!Number.isNaN(array[i]) &&
//      array[i] !== false &&
//      array[i] !== null &&
//      array[i] !== 0 &&
//      array[i] !== undefined &&
//      array[i] !== '') {
//       truthyArr.push(array[i]);
//     }
//   }
//   return truthyArr;
// }

function compact(array) {
  var truthyArr = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      truthyArr.push(array[i]);
    }
  }
  return truthyArr;
}
