import React from 'react';

import '../styles/Project.css';

const Project = props => {
	return (
		<div className="Project">
			<h3>{props.project.title}</h3>
			{/* embed video */}
			<p>{props.project.description}</p>
		</div>
	);
}

export default Project;
