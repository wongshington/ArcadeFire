import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Header from "./header/header";
import Tetris from "./tetris/tetris";
import Memory from "./memory/board";
import Background from "./background/background";

class App extends Component {
	render() {
		return (
			<div className="App grid">
				<Router>
					<Header />
					<Route path="/tetris" component={Tetris} />
					<Route path="/memory" component={Memory} />
				</Router>
				<Background height={500} width={500} />
			</div>
		);
	}
}

export default App;
