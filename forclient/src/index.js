import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from 'react-redux'
import Store from './Redux/Reducers/store'


ReactDOM.render(
  <React.StrictMode>
  <Provider  store={Store}>
    <Router>
      <App />
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

