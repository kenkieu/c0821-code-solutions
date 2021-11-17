/* exported takeNextSmallest */

// assign firstValue to the first item of the queue
// peek at secondValue and assign to variable
// if firstValue is undefined, return undefined
// if secondValue is undefined, return firstValue
// if firstValue !== undefined && secondValue is !== undefined (exist)
// if

function takeNextSmallest(queue) {
  const firstValue = queue.dequeue();
  const secondValue = queue.peek();

  if (firstValue === undefined) {
    return undefined;
  }
  if (secondValue === undefined) {
    return firstValue;
  }
}
