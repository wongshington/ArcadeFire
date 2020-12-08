import React, { useEffect } from "react";

import styles from "./background.css";

function random(min, max) {
	return min + Math.random() * (max - min + 0.2);
}

const Background = (props) => {
	const numElements = 100;
	const eleArray = [];

	function genElements(w, h) {
		for (let i = 0; i < numElements; i++) {
			eleArray.push({
				x: Math.random() * w,
				y: Math.random() * h,
				speedX: random(-0.15, 0.15),
				speedY: Math.abs(random(0.2, 0.25)),
			});
		}
	}

	function drawElements(ctx) {
		ctx.font = "5px Times New Roman";
		for (let i = 0; i < eleArray.length; i++) {
			let el = eleArray[i];
			// seasonal effect
			ctx.fillText("❄️", el.x, el.y);
		}
	}

	function moveElements(w, h) {
		for (let i = 0; i < eleArray.length; i++) {
			eleArray[i].x += eleArray[i].speedX / 2;
			eleArray[i].y += eleArray[i].speedY / 2;

			if (eleArray[i].y > h) {
				eleArray[i].x = Math.random() * w;
				eleArray[i].y = -10;
			}
		}
	}

	const canvasRef = React.useRef(null);

	const draw = (ctx) => {
		ctx.fillStyle = "#1A2238";
		ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		drawElements(ctx);
	};

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		window.devicePixelRatio = 3;
		ctx.scale(3, 3);

		let animationFrameId;

		genElements(ctx.canvas.width, ctx.canvas.height);

		const render = () => {
			ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
			moveElements(ctx.canvas.width, ctx.canvas.height);
			draw(ctx);
			animationFrameId = window.requestAnimationFrame(render);
		};

		render();

		return () => {
			window.cancelAnimationFrame(animationFrameId);
		};
	}, [draw]);

	return (
		<div style={{ textAlign: "center" }}>
			<canvas
				id="canvas"
				ref={canvasRef}
				style={{ position: "absolute" }}
			></canvas>
		</div>
	);
};

export default Background;
