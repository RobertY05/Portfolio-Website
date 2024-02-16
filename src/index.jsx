import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import NavBar from './Navbar'
import Footer from './Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar place="/" />
    <h1 className="homeImage">Robert Yan</h1>
    <h2>Hi! I'm Robert,</h2>
    <div className="mainBody">
      <div className="imageContainer">
        <img src="mainImage.png" alt="Picture of an origami piece" className="mainImage" />
        <figcaption>"Spring in Action" designed by Jeff Beynon</figcaption>
      </div>
      
      <div className="textContainer">
        <p>I'm a student at the University of Waterloo studying Computer Science. I have a passion for tech, and I also have a passion for making stuff: I've dabbled in game design, web-dev, and low-level programming. If you have the time, check out my&nbsp;<a href="/projects.html">projects</a>&nbsp;or my&nbsp;<a href="/resume.pdf">resumé</a>.</p> 
        <p>Before I made things with code, I made things with paper. I've put a few of them on my website for your viewing pleasure.</p>
        
      </div>
    </div>
    <Footer />

  </React.StrictMode>,
)
