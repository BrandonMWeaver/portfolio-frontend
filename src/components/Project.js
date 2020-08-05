import React from 'react';

import '../styles/Project.css';

const Project = props => {
	return (
		<div className="Project">
			<h3>{props.project.title}</h3>
			<div className="iframe-container">
				<iframe allowFullScreen src={props.project.videoSource} />
			</div>
			<p>{props.project.description}</p>
		</div>
	);
}

export default Project;
