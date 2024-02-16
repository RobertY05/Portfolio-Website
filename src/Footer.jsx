import React from 'react'
import './Footer.css'
export default function Footer() {
    const places = [["Github", "https://github.com/RobertY05", false], ["LinkedIn", "https://www.linkedin.com/in/robert-yan-ca", false]];

    const formatted = places.map(link => {
        return (<a href={link[1]} className="footerLink" target="_blank">{link[0]}</a>);
    });

    return (
        <div className="footerContainer">
            <nav className="footerLinks">
                {formatted}
            </nav>
            <p className="copyright">Copyright &copy; Robert Yan, 2024</p>
        </div>
        
    );
}