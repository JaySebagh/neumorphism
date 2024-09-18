import React from "react";
import '../../assets/styles/projectcard.css'

const ProjectCard = ({ data } ) => {
    return(
        <div class="card">
            <img className="url" src={data.url} alt="project preview"/>
            <div className="title-container">
                <p className="title">{data.title}</p>
                <a className="repo-button" href={`//${data.github}`} target="_blank" rel="noreferrer">
                    REPO
                </a>
                <div className="button-spacer">–</div>
                <a className="demo-button" href={`//${data.demo}`} target="_blank" rel="noreferrer">
                    DEMO
                </a>
            </div>
            <p className="bio">{data.bio}</p>
            <p className="stack">{data.stack}</p>
        </div>
    )
};

export default ProjectCard;