function handleClick(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tab.length; i++) {
      if ($tab[i] === event.target) {
        event.target.className = 'tab active';
      } else {
        event.target.className = 'tab';
      }
    }
  }

}

var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

console.log('$tabContainer:', $tabContainer);
console.log('$tab', $tab);
console.log('$view', $view);

$tabContainer.addEventListener('click', handleClick);
