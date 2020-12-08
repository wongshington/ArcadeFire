import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

const Header = () => {
	//
	return (
		// <div className="game-view">
		<header className="header flex">
			<Link to="/">◀🕹</Link>
			<Link to="/">Arcade 🎮🕹🔥 Fire</Link>
			<div>Welcome Gamer!</div>
		</header>
		// </div>
	);
};

export default Header;
