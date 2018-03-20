import React from "react";
import "./NavBar.css";


// Creating the Nav bar that holds scores. Props to place scores in real time
const NavBar = props => (
	<nav>
		<ul>
			<li className="nav-bar brand animated">
				<a href="/clicky-game/">{props.title}</a>
			</li>

			<li id="rightorwrong">{props.rightWrong}</li>

			<li id="currentscore">Current Score: {props.score}</li>

			<li id="topscore">Top Score: {props.topScore}</li>
		</ul>
	</nav>
);

export default NavBar;