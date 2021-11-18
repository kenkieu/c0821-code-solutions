/* exported swapFront */

function swapFront(list) {
  if (list.next == null) {
    return list;
  }
  const first = list.data;
  const second = list.next.data;
  const rest = list.next.next;
  list.data = second;
  list.next.data = first;
  list.next.next = rest;
  return list;
}
