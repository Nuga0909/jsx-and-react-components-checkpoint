import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

let nameProvided = "Adeshina"; // remove name provided to change to  default

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App myName={nameProvided}/>
  </React.StrictMode>
);
