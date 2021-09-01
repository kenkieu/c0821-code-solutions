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
