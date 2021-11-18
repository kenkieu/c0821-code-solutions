/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const endList = list.next;
  const newValue = new LinkedList(value);
  list.next = newValue;
  list.next.next = endList;
}
