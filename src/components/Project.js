import React from 'react';

import '../styles/Project.css';

const Project = props => {
	return (
		<div className="Project">
			<h3>{props.project.title}</h3>
			<div className="iframe-container">
				<iframe allowFullScreen title={props.title} src={props.project.videoSource} />
			</div>
			<p>{props.project.description}</p>
			<a href={props.project.href} target="_blank" rel="noopener noreferrer">
				<img src="images/GitHub-Mark-32px.png" alt="GitHub" />
			</a>
		</div>
	);
}

export default Project;
