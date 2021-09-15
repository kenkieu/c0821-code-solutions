var $h1 = document.querySelector('h1');

var intervalId = setInterval(function () {
  var headingText = $h1.textContent;
  if (headingText > 1) {
    headingText--;
    $h1.textContent = headingText;
  } else {
    $h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalId);
  }
}, 1000);
