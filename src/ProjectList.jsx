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
                    <div className="projectDescription">
                        <div className="projectWords">
                            <p className="projectName">{project.name}</p>
                            <ul>
                                {project.keywords.map(word => {
                                    return (
                                        <li className="projectKeyword">{word}</li>
                                    )
                                })}
                            </ul>
                        </div>
                        <ul className="linkList">
                            {project.links.map(link => {
                                return (
                                    <li><a className="projectLink" href={link[1]} target="_blank">{link[0]}</a></li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            );
        }
    });

    const rest = data.map(project => {
        if (!project.highlighted) {
            return (
                <div className="normalProject">
                    <img src={project.image} alt="Picture of a project" />
                    <div className="projectDescription">
                        <div className="projectWords">
                            <p className="projectName">{project.name}</p>
                            <ul>
                                {project.keywords.map(word => {
                                    return (
                                        <li className="projectKeyword">{word}</li>
                                    )
                                })}
                            </ul>
                        </div>
                        <ul className="linkList">
                            {project.links.map(link => {
                                return (
                                    <li><a className="projectLink" href={link[1]} target="_blank">{link[0]}</a></li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            )
        }
    });

    return (
        <div>
            <h3>Highlighted Projects</h3>
    
            <div className="projectBox">
                {highlighted}
            </div>

            <h3>Other Projects</h3>
            
            <div className="projectBox">
                {rest}
            </div>
        </div>
    );
}