/* exported chunk */
//input 1: Array
//input 2: number determining chunk size
//output: array of arrays
//create array to store arrays
//

function chunk(array, size){
  var arrB = [];
  for(var i = 0; i < array.length; i++){
    var arr = [];
    for(var x = 0; x < array.length; x++){
      arr.push(array[x])
    }
    console.log(arr)
    return arr;
  }
var masterArr = arrB.concat(arr);
console.log(masterArr)
return masterArr;
}
