import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';
import Store from './data/Store';


ReactDOM.render(
  <Router>
    <Store>
      <App />
    </Store>
  </Router>,
  document.getElementById('root'),
);