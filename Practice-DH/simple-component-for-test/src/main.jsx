import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {store}  from './components/Counter'



const main = () => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
  )
} 
main()

store.subscribe(main)

