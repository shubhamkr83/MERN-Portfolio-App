import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Login from './Components/Login';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    {/* <Login /> */}
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();