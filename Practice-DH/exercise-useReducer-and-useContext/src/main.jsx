import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AppContextProvider from './context/context.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
)
