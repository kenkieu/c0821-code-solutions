/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) {
    return undefined;
  }
  const firstValue = stack.pop();
  const secondValue = stack.peek();
  stack.push(firstValue);
  return secondValue;
}
