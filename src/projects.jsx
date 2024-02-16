import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import NavBar from './Navbar'
import ProjectList from './ProjectList'
import Footer from './Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <link rel="icon" type="image/png" href="projectsFavicon.ico">

    </link>
    <NavBar place="projects.html" />
    <h1>Projects</h1>
    <h2>I make things from time to time</h2>
    <ProjectList />
    <Footer />
  </React.StrictMode>,
)
