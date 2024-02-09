import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import NavBar from './Navbar'
import ProjectList from './ProjectList'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar place="projects.html" />
    <ProjectList />
    <p>PROJECTS!!!</p>
  </React.StrictMode>,
)
