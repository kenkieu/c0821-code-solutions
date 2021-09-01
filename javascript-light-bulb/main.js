//query for btn class
//query for body
//create a default of false for light
//listen for clicks on the button and when this happens run the following:
//if light is off, turn it on
//assign btn and light color
//assign light background
//change light status to on
//otherwise
//assign btn and make the bulb dark
//assign dark background
//change light status to off


var lightOn = false;

function handleSwitch(event) {
  if (lightOn === false) {
    $btn.className = 'btn btn-light';
    $body.className = 'bg-light';
    lightOn = true;
  } else {
    $btn.className = 'btn btn-dark';
    $body.className = 'bg-dark';
    lightOn = false;
  }
}

var $btn = document.querySelector('.btn');
var $body = document.body;
$btn.addEventListener('click', handleSwitch);
