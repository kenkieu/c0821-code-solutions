/* exported equal */
// input 1: array
// input 2: array
// output: boolean
// if the length of the first is not equal to the second
// return false
// look at each character of both first and second at the same position
// if it is not equal
// return false
// return true for remaining
function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
