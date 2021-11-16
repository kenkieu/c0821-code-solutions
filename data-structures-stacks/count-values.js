/* exported countValues */

function countValues(stack) {
  let count = 0;
  if (stack.peek() === undefined) {
    return count;
  }
  while (stack.pop() !== undefined) {
    count++;
  }
  return count;
}
