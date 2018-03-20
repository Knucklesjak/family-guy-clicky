import React from "react"; 
import "./FriendCard.css";


// Create prop component for the friend cards with onlick so users can select
const FriendCard = props => (
	<div 
		className="card"
		value={props.id}
		onClick={() => props.handleClick(props.id)}
	>

		<div className="img-container">
			<img alt={props.name} src={props.image} />
		</div>
	</div>
);