import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
//css一旦被引入，所有的文件都会生效
import './style.js';
import App from './App';
import IconStyle from './statics/iconfont/iconfont'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <IconStyle/>
      <App />
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

