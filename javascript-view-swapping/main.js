function handleClick(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tab.length; i++) {
      if ($tab[i] === event.target) {
        $tab[i].className = 'tab active';
        var attr = $tab[i].getAttribute('data-view');
      } else {
        $tab[i].className = 'tab';
      }
    }

    for (var x = 0; x < $view.length; x++) {
      if ($view[x].dataset.view === attr) {
        $view[x].className = 'view';
      } else {
        $view[x].className = 'view hidden';
      }
    }
  }
}

var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', handleClick);
