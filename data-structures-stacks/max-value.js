/* exported maxValue */

function maxValue(stack) {
  if (stack.peek() === undefined) {
    return -Infinity;
  }

  let maxInteger = stack.pop();

  while (stack.peek() !== undefined) {
    const current = stack.pop();
    if (current > maxInteger) {
      maxInteger = current;
    }
  }
  return maxInteger;
}
