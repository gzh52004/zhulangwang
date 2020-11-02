import React from 'react';
import ReactDOM from 'react-dom';
import{HashRouter,BrowserRouter } from 'react-router-dom';


import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
 
  // <HashRouter>
  //   <App />
  // </HashRouter>,
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  
  document.getElementById('root')
);


