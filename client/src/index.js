import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import App from './App';

injectGlobal`
  * {
    font-family: sans-serif;
  }

  body {
    margin: 0;
  }
`;

ReactDOM.render(<App />, document.getElementById('root'));
