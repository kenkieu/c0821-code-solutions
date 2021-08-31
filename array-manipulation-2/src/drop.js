/* exported drop */
//input 1: array
//input 2: number
//output: new array (after the first count elements)
//create storage for array
//if array input is empty return empty array
//look over array with starting point set to count input
//move items to array storage
//return array storage

function drop(array, count){
  var arr = [];
  if(array.length === 0) {
    return arr;
  }
  for(var i = count; i < array.length; i++){
    arr.push(array[i])
  }
  return arr;
}
