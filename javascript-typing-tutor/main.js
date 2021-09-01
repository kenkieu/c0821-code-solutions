// create storage to keep track of count
// query for all span elements & store
// listen for keyboard down presses, and when this occurs call the function handleKeys
// if the key press is the same as the text character make it purple (correct)
// add 1 to counter
// add the underline style to the next word (this is already set on the first char)
// also if the wrong key is entered, make the text orange (wrong)

var counter = 0;

function handleKeys(event) {
  if (event.key === $nodeList[counter].textContent) {
    $nodeList[counter].className = 'text-correct';
    counter++;
    $nodeList[counter].className = 'underline';
  } else {
    $nodeList[counter].className = 'text-error';
  }
}

var $nodeList = document.querySelectorAll('span');
document.addEventListener('keydown', handleKeys);
