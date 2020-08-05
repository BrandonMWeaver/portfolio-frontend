import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/NavigationBar.css';

const NavigationBar = () => {
	const anchors = [
		{ text: "HOME", to: '/' },
		{ text: "PROJECTS", to: "/projects" },
		{ text: "ABOUT", to: "/about" }
	];
	
	return (
		<div className="NavigationBar">
			{anchors.map((anchor, index) => {
				return <NavLink key={index} to={anchor.to}>{anchor.text}</NavLink>
			})}
		</div>
	);
}

export default NavigationBar;
