import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import NavBar from './Navbar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar place="/" />
    <h1 className="homeImage">Robert Yan</h1>
  </React.StrictMode>,
)
