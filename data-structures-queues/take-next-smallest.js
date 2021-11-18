/* exported takeNextSmallest */

// assign firstValue to the first item of the queue
// peek at secondValue and assign to variable
// if firstValue is undefined, return undefined
// if secondValue is undefined, return firstValue
// while firstValue is greater or equal to secondValue
// // move firstValue to the back with enqueue
// // reassign new queue.dequeue() to firstValue
// // peek the secondValue so the loop knows when to end
// // when the second value is no longer smaller than first
// return firstValue

function takeNextSmallest(queue) {
  let firstValue = queue.dequeue();
  let secondValue = queue.peek();

  if (firstValue === undefined) {
    return undefined;
  }
  if (secondValue === undefined) {
    return firstValue;
  }
  while (firstValue >= secondValue) {
    queue.enqueue(firstValue);
    firstValue = queue.dequeue();
    secondValue = queue.peek();
  }
  return firstValue;
}
