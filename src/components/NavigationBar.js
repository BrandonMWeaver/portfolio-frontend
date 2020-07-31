import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/NavigationBar.css';

const anchors = [
	{ text: "Home", to: '/' },
	{ text: "About", to: '/about' }
];

const NavigationBar = () => {
	return (
		<div className="NavigationBar">
			{anchors.map((anchor, index) => {
				return <NavLink key={index} to={anchor.to}>{anchor.text}</NavLink>
			})}
		</div>
	);
}

export default NavigationBar;
