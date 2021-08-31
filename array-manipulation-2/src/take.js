/* exported take */
//input 1: array
//input 2: number
//output: new array (containing first count elements of array)
// create empty storage for array
// if length of array is 0
// return the empty array
// look at each array item until the specified count
// move these items to array storage
// return array storage

function take(array, count){
 var arr = [];
  if(array.length === 0) {
    return arr;
  }
 for(var i = 0; i < count; i++) {
     arr.push(array[i])
  }
   return arr;
 }
