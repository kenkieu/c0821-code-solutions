var $userList = document.querySelector('#user-list');

function getPeople() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log('status of xhr:', xhr.status);
    console.log('response of xhr:', xhr.response);
    for (var i = 0; i < xhr.response.length; i++) {
      var $name = document.createElement('li');
      $name.textContent = xhr.response[i].name;
      $userList.append($name);
    }
  });
  xhr.send();
}

getPeople();
