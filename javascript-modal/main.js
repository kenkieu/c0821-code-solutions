// create boolean value to determine if modal is open or closed
// if modal is closed, apply the styles to open it
// set boolean to true
// otherwise, if it's already on
// turn it off by applying the hidden style
// set boolean to false

var modalOn = false;

function modalHandler() {
  if (modalOn === false) {
    bgModalEl.className = 'row justify-center align-center bg-modal';
    modalEl.className = 'col-thirty-seven text-center ptb30 modal';
    modalOn = true;
  } else {
    bgModalEl.className = 'hidden';
    modalEl.className = 'hidden';
    modalOn = false;
  }
}

var $openModal = document.querySelector('.btn-open');
var $closeModal = document.querySelector('.btn-close');
var bgModalEl = document.querySelector('div.align-center');
var modalEl = document.querySelector('div.col-thirty-seven');

$openModal.addEventListener('click', modalHandler);
$closeModal.addEventListener('click', modalHandler);
