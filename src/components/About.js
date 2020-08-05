import React from 'react';

import '../styles/About.css';

const About = () => {
	const p = "I'm a full-stack software engineer/web developer. " +
						"I have experience working with multiple languages, frameworks, and environments to build responsive, performant applications across multiple platforms."

	return (
		<div className="About">
			<p>{p}</p>
		</div>
	);
}

export default About;
