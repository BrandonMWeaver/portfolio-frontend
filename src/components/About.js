import React from 'react';

import '../styles/About.css';

const About = () => {
	const p = "I'm a full-stack software engineer/web developer. " +
						"I have experience working with multiple languages, frameworks, and environments to build responsive, performant applications across multiple platforms."

	return (
		<div className="About">
			<p>{p}</p>
			<div className="links-container">
				<a href="https://www.linkedin.com/in/brandonmichaelweaver/" target="_blank" rel="noopener noreferrer">
					<img src="images/LinkedIn-Mark.png" alt="LinkedIn" style={{ width: "63.5px", height: "54px" }} />
				</a>
				<a href="https://www.github.com/BrandonMWeaver" target="_blank" rel="noopener noreferrer">
					<img src="images/GitHub-Mark-64px.png" alt="GitHub" style={{ height: "54px" }} />
				</a>
			</div>
		</div>
	);
}

export default About;
