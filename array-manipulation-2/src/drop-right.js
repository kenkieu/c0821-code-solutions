/* exported dropRight */
// input 1: array
// input 2: number
// output: new array containing the elements of array before the last count elements
// create storage for new array
// if nothing in array
// return empty array
// look at each item of array
// move items to array for the modified length
// return new array
// length - 2

function dropRight(array, number){
  var arr = [];
  if(!array.length) {
    return arr;
  }
  for(var i = 0; i < array.length - number; i++) {
    arr.push(array[i])
  }
  return arr;
}
