import React from "react";

import styles from "./background.css";

const Background = (props) => {
	const canvasRef = React.useRef(null);

	React.useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext("2d");
		context.fillStyle = "#000000";
		context.fillRect(0, 0, context.canvas.width, context.canvas.height);
	}, [canvasRef]);

	return (
		<div style={{ textAlign: "center" }}>
			<canvas id="canvas" ref={canvasRef} style={{ position: "absolute" }}>
				{props.children}
			</canvas>
		</div>
	);
};

export default Background;
