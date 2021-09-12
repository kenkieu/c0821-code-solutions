/* exported reverseWords */
// input: string
// output: string
//* Create storage for output array
//* Split each word up, and store
//* Look at each item in input array
//* Split word into letters, reverse order of letters, join into word
//* Move each modified word into the output array
//* Join the outputArr together
//* Return string output

function reverseWords(string) {
  var outputArr = [];
  var wordArr = string.split(' ');
  for (var i = 0; i < wordArr.length; i++) {
    var reverseWord = wordArr[i].split('').reverse().join('');
    outputArr.push(reverseWord);
  }
  var reversedString = outputArr.join(' ');
  return reversedString;
}
