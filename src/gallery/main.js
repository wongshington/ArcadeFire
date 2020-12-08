import React from "react";
import "./gallery.css";

import GalleryTile from "./galleryTile.js";

const Main = () => {
	//

	const listTiles = () => {
		let arr = [];
		for (let i = 0; i < 7; i++) {
			arr.push(<GalleryTile />);
		}
		return arr;
	};

	return (
		<div className="main-view">
			<div className="game-list grid">{listTiles()}</div>
		</div>
	);
};

export default Main;
