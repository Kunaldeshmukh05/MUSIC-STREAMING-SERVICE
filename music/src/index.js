import { createRoot } from 'react-dom';
import React from 'react';
import App from './App'; 
import './index.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

// Use createRoot instead of ReactDOM.createRoot
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
