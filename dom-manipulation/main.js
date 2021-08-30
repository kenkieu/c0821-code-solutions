var counter = 0;

var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

$hotButton.addEventListener('click', function (event) {
  counter++;
  $clickCount.textContent = 'Click: ' + counter;
  if (counter <= 3) {
    $hotButton.className = 'hot-button cold';
  } else if (counter >= 4 && counter <= 6) {
    $hotButton.className = 'hot-button cool';
  } else if (counter >= 7 && counter <= 9) {
    $hotButton.className = 'hot-button tepid';
  } else if (counter >= 10 && counter <= 12) {
    $hotButton.className = 'hot-button warm';
  } else if (counter >= 13 && counter <= 15) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
});
