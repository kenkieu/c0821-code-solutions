import React from 'react';
import ReactDOM from 'react-dom';

const $root = document.querySelector('#root');

const title = React.createElement(
  'h1',
  null,
  'Hello, React!'
);

ReactDOM.render(title, $root);
