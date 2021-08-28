/* exported ransomCase */
// input: string
// output: string every other character uppercase, starting with lowercase
// create storage for word output
// look at each character and
// if even undercase
// otherwise uppercase
// return word

function ransomCase(string) {
  var ransomLetter = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      ransomLetter += string[i].toLowerCase();
    } else {
      ransomLetter += string[i].toUpperCase();
    }
  }
  return ransomLetter;
}
