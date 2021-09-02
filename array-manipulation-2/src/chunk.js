/* exported chunk */
//input 1: Array
//input 2: number determining chunk size
//output: array of arrays
//create array to store arrays
//if no array length
//return empty arr
//for each iteration
//create subArr storage
//look at each item until the specified condition
//push until we have a "chunk"
//when condition is no longer true, push the chunk to the final array
//repeat the process for length of the array
//return the final array


function chunk(array, size){
  var outputArr = [];
  if(!array.length) {
    return outputArr;
  }
  for(var i = 0; i < array.length; i += size){
    var subArr = [];
    for(var x = i; x < i + size; x++){
      if(x < array.length){
        subArr.push(array[x])
      }
    }
    outputArr.push(subArr)
  }
  return outputArr;
}
