function handleClick(event) {
  if (event.target.matches('.tab')) {
    let tabView = '';
    for (const tab of $tab) {
      if (tab === event.target) {
        tab.className = 'tab active';
        tabView = tab.getAttribute('data-view');
      } else {
        tab.className = 'tab';
      }
    }

    for (const view of $view) {
      const dataView = view.dataset.view;
      dataView === tabView
        ? view.className = 'view'
        : view.className = 'view hidden';
    }
  }
}

var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', handleClick);
