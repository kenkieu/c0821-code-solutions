/* exported reverseWords */
// input: string
// output: string

function reverseWords(string) {
  var word = '';
  var reverseWord = '';
  var strArr = [];
  var reverseArr = [];
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      word += string[i];
    } else {
      strArr.push(word);
      word = '';
    }
  }
  strArr.push(word);
  console.log(strArr);

  // for (var x = 0; x < strArr.length; x++) {
  //   // console.log(strArr[x]);
  //   for (var y = strArr[x].length - 1; y >= 0; y--) {
  //     // console.log(strArr[x][y]);
  //     reverseArr.push(strArr[x][y]);
  //     console.log(reverseArr);
  //     reverseWord = reverseArr.join(' ');
  //   }
  // }
  // console.log(reverseWord);
  // return reverseWord;
}
