import React, { Component } from 'react';
import './App.css';

class NewTweet extends Component {
	render(){
		return (
			<div className = "NewTweet-Container">
				<h1>Compose New Tweet</h1>
				<div className="Message"></div>
			</div>
		)
	}
}

export default NewTweet;