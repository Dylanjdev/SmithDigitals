import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'

const params = new URLSearchParams(window.location.search)
const redirectPath = params.get('redirect')
if (redirectPath) {
  window.history.replaceState({}, '', redirectPath)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
