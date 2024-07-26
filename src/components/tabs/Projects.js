import React, { useState } from "react";
import '../../assets/styles/projects.css'
import projectsDATA from '../../assets/data/projectsData.json';
import ProjectCard from '../projects/ProjectCard';


const Projects = () => {
    const [search, setSearch] = useState("");

    return(
        <div className="projects-tab-container">
            <input
                type="text"
                autocomplete="off"
                className="searchbar"
                placeholder="Search Project Title"
                value={ search }
                onChange={(e) => setSearch(e.target.value)}
            />
            <div className="projects-container">
                <div>
                    {projectsDATA.filter((item) =>
                        item.title.toLowerCase().includes(search.toLowerCase())
                    ).map((data, index) => (
                        <ProjectCard key={index} data={data}/>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Projects;