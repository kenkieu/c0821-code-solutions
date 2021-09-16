var $chevronLeft = document.querySelector('.fa-chevron-left');
var $chevronRight = document.querySelector('.fa-chevron-right');
var $img = document.querySelector('img');
var $dots = document.querySelectorAll('.fa-circle');
var imageArr = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var counter = 0;

function handlePrevImage(event) {
  if (counter > 0) {
    counter--;
    imageAttr();
    dotMarker();
  }
}

function handleNextImage(event) {
  if (counter < 4) {
    counter++;
    imageAttr();
    dotMarker();
  }
}

function imageAttr() {
  $img.setAttribute('src', imageArr[counter]);
  $img.setAttribute('data-img-id', counter);
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

$chevronLeft.addEventListener('click', handlePrevImage);
$chevronRight.addEventListener('click', handleNextImage);
