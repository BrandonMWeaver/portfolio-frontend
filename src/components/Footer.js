import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/Footer.css';

const Footer = () => {
	const anchors = [
		{ text: "About", to: "/about" }
	];
	
	return (
		<div className="Footer">
			{anchors.map((anchor, index) => {
				return <NavLink key={index} to={anchor.to}>{anchor.text}</NavLink>
			})}
		</div>
	)
}

export default Footer;
