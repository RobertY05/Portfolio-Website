import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import NavBar from './Navbar'
import ProjectList from './ProjectList'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar place="projects.html" />
    <h1>Projects</h1>
    <h2>I make things from time to time</h2>
    <ProjectList />
  </React.StrictMode>,
)
