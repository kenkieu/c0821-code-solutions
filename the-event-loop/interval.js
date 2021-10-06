let count = 3;

function decrement() {
  if (count > 0) {
    console.log(count--);
  } else if (count === 0) {
    console.log('Blast off!');
    clearInterval(intervalID);
  }
}

var intervalID = setInterval(decrement, 1000);
