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
            console.log(project.image);
            return (
                <div>
                    <img src={project.image} alt="Picture of a project" />
                    <p>{project.name}</p>
                    <p>{project.keywords}</p>
                </div>
            );
        }
    });

    return (
        <div>
            {highlighted}
        </div>
    );
}