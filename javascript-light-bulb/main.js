function handleSwitch(event) {
  if ($btn.className === 'btn btn-dark') {
    $btn.className = 'btn btn-light';
    $body.className = 'bg-light';
  } else {
    $btn.className = 'btn btn-dark';
    $body.className = 'bg-dark';
  }
}

var $btn = document.querySelector('.btn');
var $body = document.body;
$btn.addEventListener('click', handleSwitch);
