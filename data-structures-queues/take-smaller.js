/* exported takeSmaller */

function takeSmaller(queue) {
  const firstValue = queue.dequeue();
  const secondValue = queue.dequeue();

  if (firstValue === undefined) {
    return undefined;
  }
  if (secondValue === undefined) {
    return firstValue;
  }
  if (firstValue < secondValue || firstValue === secondValue) {
    queue.enqueue(secondValue);
    return firstValue;
  } else {
    queue.enqueue(firstValue);
    return secondValue;
  }
}
