/* exported postpone */

function postpone(queue) {
  const value = queue.dequeue();
  value !== undefined &&
  queue.enqueue(value);
}
