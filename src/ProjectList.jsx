import React from 'react'
import './ProjectList.css'
import data from './data'

var sorted = JSON.parse(JSON.stringify(data))
sorted.sort(function (a, b) {
    return b.score - a.score;
});

export default function ProjectList() {

    // const formatted = places.map(link => {
    //     if (place == link[1]) {
    //         return (<p className="selected">{link[0]}</p>);
    //     } else if (link[2]) {
    //         return (<a href={link[1]} className="formattedText" target="_blank">{link[0]}</a>);
    //     } else {
    //         return (<a href={link[1]} className="formattedText">{link[0]}</a>);
    //     }
    // });

    const highlighted = data.map(project => {
        if (project.highlighted) {
            return (
                <div className="highlightedProject">
                    <img src={project.image} alt="Picture of a project" />
                    <p className="projectName">{project.name}</p>
                    <li className="projectKeywords">
                        {project.keywords.map(word => {
                            return (
                                <ul>{word}</ul>
                            )
                        })}
                    </li>
                </div>
            );
        }
    });

    const rest = data.map(project => {
        if (!project.highlighted) {
            return (
                <div className="normalProject">
                    <img src={project.image} alt="Picture of a project" />
                    <p className="projectName">{project.name}</p>
                    <li className="projectKeywords">
                        {project.keywords.map(word => {
                            return (
                                <ul>{word}</ul>
                            )
                        })}
                    </li>
                </div>
            )
        }
    });

    return (
        <div>
            <h2>I think these projects are pretty cool</h2>
    
            <div className="highlightedBox">
                {highlighted}
            </div>

            <h2>These ones are cool as well if you want to look</h2>
            
            <div className="normalBox">
                {rest}
            </div>
        </div>
    );
}