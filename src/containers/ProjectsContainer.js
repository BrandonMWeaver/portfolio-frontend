import React from 'react';

import Project from '../components/Project';

import '../styles/ProjectsContainer.css';

const ProjectsContainer = props => {
	return (
		<div className="ProjectsContainer">
			{props.projects.map((project, index) => {
				return <Project key={index} title={index} project={project} />
			})}
		</div>
	);
}

export default ProjectsContainer;
