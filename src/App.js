import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

import Tetris from "./tetris/tetris";
import Memory from "./memory/board";
import Gallery from "./gallery/main";
import Background from "./background/background";

class App extends Component {
	render() {
		return (
			<div className="App grid">
				<Router>
					<Route path="/tetris" component={Tetris} />
					<Route path="/memory" component={Memory} />
					<Route path="/" component={Gallery} />
				</Router>
				<Background height={500} width={500} />
			</div>
		);
	}
}

export default App;
