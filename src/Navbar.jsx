import React from 'react'
import './Navbar.css'
export default function NavBar({place}) {
    const places = [["Home", "/", false], ["Projects", "/projects.html", false], ["Resumé", "/resume.pdf", true]];

    const formatted = places.map(link => {
        if (place == link[1]) {
            return (<p className="selected">{link[0]}</p>);
        } else if (link[2]) {
            return (<a href={link[1]} className="formattedText" target="_blank">{link[0]}</a>);
        } else {
            return (<a href={link[1]} className="formattedText">{link[0]}</a>);
        }
    });

    return (
        <nav className="navbar">
            {formatted}
        </nav>
    );
}