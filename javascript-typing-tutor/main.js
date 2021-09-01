function handleKeys(event) {

  var counter = 0;
  var $spanEl = document.querySelectorAll('span');
  if ($spanEl[counter].textContent === event.key) {
    console.log(event.key);
    $spanEl[counter].className = 'underline';
    $spanEl[counter].className = 'text-correct';
    counter++;
  }

  console.log($spanEl);
  document.addEventListener('keydown', handleKeys);
}

// NODELIST
