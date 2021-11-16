/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() === undefined) {
    return;
  }
  const firstValue = stack.pop();
  stack.push(value);
  stack.push(firstValue);
}
