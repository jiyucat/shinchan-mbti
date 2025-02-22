import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18 방식
import App from './App';

console.log('index.js: 렌더링 시작');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
