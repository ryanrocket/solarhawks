import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppStyles from './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GeistProvider, CssBaseline } from '@geist-ui/react'
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <GeistProvider style={AppStyles}>
      <CssBaseline />
      <App />
    </GeistProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
console.log("\n\n%cRYAN WANS\n\n", "color: red;font-weight:700;font-size:20px;")