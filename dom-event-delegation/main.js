function handleClick(event) {
  console.log('value of event.target :', event.target);
  console.log('value of event.target.tagName:', event.target.tagName);
  if (event.target.matches('button')) {
    var closestEl = event.target.closest('.task-list-item');
    console.log('value of closest .task-list-item:', closestEl);
    closestEl.remove();
  }
}

var $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', handleClick);
