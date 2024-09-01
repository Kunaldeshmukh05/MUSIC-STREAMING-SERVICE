import {createRoot} from 'react-dom/client'
import React from 'react';
import App from './App'; 
import './index.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/react-bootstrap/dist/react-bootstrap.min'
// Use createRoot instead of ReactDOM.createRoot
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);






