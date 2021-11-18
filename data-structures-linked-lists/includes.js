/* exported includes */

function includes(list, value) {
  let isIncluded = false;
  while (list.next !== null) {
    if (list.data === value) {
      isIncluded = true;
    }
    list = list.next;
  }
  if (list.data === value) {
    isIncluded = true;
  }
  return isIncluded;
}
