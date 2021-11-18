/* exported take2nd */

function take2nd(queue) {
  const value = queue.dequeue();
  value !== undefined &&
  queue.enqueue(value);
  return queue.dequeue();
}
