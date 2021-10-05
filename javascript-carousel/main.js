var $chevronLeft = document.querySelector('.fa-chevron-left');
var $chevronRight = document.querySelector('.fa-chevron-right');
var $img = document.querySelector('img');
var $dotContainer = document.querySelector('.dots');
var $dots = document.querySelectorAll('.fa-circle');
var imageArr = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var counter = 0;
var intervalId = null;

function handlePrevImage(event) {

  if (counter > 0) {
    counter--;
  } else {
    counter = 5;
  }
  imageAttr();
  dotMarker();
}

function handleNextImage(event) {
  if (counter < 4) {
    counter++;
  } else {
    counter = 0;
  }
  imageAttr();
  dotMarker();
}

function imageAttr() {
  $img.setAttribute('src', imageArr[counter]);
  $img.setAttribute('data-img-id', counter);
  clearInterval(intervalId);
  intervalReset();
}

function dotMarker() {
  for (var i = 0; i < $dots.length; i++) {
    if ($dots[i].dataset.imgId === $img.dataset.imgId) {
      $dots[i].className = 'fas fa-circle plr-third-rem';
    } else {
      $dots[i].className = 'far fa-circle plr-third-rem';
    }
  }
}

function handleDotClick(event) {
  if (!event.target.matches('i')) {
    return;
  } else if (event.target.matches('i')) {
    $img.setAttribute('src', imageArr[event.target.getAttribute('data-img-id')]);
    $img.setAttribute('data-img-id', event.target.getAttribute('data-img-id'));
    counter = event.target.getAttribute('data-img-id');
  }
  for (var i = 0; i < $dots.length; i++) {
    if (event.target.getAttribute('data-img-id') === $dots[i].getAttribute('data-img-id')) {
      $dots[i].className = 'fas fa-circle plr-third-rem';
    } else {
      $dots[i].className = 'far fa-circle plr-third-rem';
    }
  }
  clearInterval(intervalId);
  intervalReset();
}

function intervalReset() {
  intervalId = setInterval(handleNextImage, 3 * 1000);
}

intervalReset();

$chevronLeft.addEventListener('click', handlePrevImage);
$chevronRight.addEventListener('click', handleNextImage);
$dotContainer.addEventListener('click', handleDotClick);
