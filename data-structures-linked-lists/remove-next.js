/* exported removeNext */

function removeNext(list) {
  if (list.next !== null) {
    const endList = list.next.next;
    list.next = endList;
  }
}
