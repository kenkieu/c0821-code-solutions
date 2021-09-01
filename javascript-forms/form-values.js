function handleFocus(event) {
  console.log('Focus event has fired');
  console.log('value of event.target.name:', event.target.name);
}

function handleBlur(event) {
  console.log('Blur event has fired');
  console.dir(event.target);
  console.log('value of event.target.name:', event.target.name);
}

function handleInput(event) {
  console.log('value of event.target.name:', event.target.name);
  console.log('value of event.target.value:', event.target.value);
}

var $inputName = document.querySelector('input#user-name');
var $inputEmail = document.querySelector('input#user-email');
var $textarea = document.querySelector('textarea');

$inputName.addEventListener('focus', handleFocus);
$inputName.addEventListener('blur', handleBlur);
$inputName.addEventListener('input', handleInput);

$inputEmail.addEventListener('focus', handleFocus);
$inputEmail.addEventListener('blur', handleBlur);
$inputEmail.addEventListener('input', handleInput);

$textarea.addEventListener('focus', handleFocus);
$textarea.addEventListener('blur', handleBlur);
$textarea.addEventListener('input', handleInput);

var messageData = {};

function handleContactForm(event) {
  event.preventDefault();
  messageData.name = $contactForm.elements.name.value;
  messageData.email = $contactForm.elements.email.value;
  messageData.message = $contactForm.elements.message.value;
  console.log(messageData);
}

var $contactForm = document.querySelector('#contact-form');
$contactForm.addEventListener('submit', handleContactForm);
