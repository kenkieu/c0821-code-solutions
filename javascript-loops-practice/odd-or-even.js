/* exported oddOrEven */
function oddOrEven(numbers) {
  var oddOrEvenArr = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      oddOrEvenArr.push('even');
    } else if (numbers[i] % 1 === 0) {
      oddOrEvenArr.push('odd');
    }
  }
  return oddOrEvenArr;
}
