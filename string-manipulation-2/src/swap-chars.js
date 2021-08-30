/* exported swapChars */
// input 1: number
// input 2: number
// input 3: string
// output: string with swapped first and second index
// create word storage
// look at each character
// if the char is firstIndex, switch with secondIndex
// also if char is secondIndex switch with firstIndex
// otherwise continue to add characters to word storage
// return word storage

function swapChars(firstIndex, secondIndex, string){
  var modStr = '';
  for(var i = 0; i < string.length; i++) {
    if(i === firstIndex) {
      modStr += string[secondIndex]
    }
    else if (i === secondIndex) {
      modStr += string[firstIndex]
    } else{
      modStr += string[i]
    }
  }
  return modStr;
}
