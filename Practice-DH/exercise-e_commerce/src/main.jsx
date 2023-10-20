import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router } from 'react-router-dom';

/**
 * To start using react-router-dom, we rename its main element, which is BrowserRouter, as Router, and we wrap our main APP component, so we can make use of all its properties.
 */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
          <App/>
    </Router>
  </React.StrictMode>,
)
