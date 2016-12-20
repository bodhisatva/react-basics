import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import State from './State';

ReactDOM.render(
<div>
  <App cat={4} txt="Hello component with state" />
  <State />
</div>,
  document.getElementById('root')
);
