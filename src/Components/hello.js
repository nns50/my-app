import React, { Component } from 'react';

class Hello extends Component {
	
	constructor(props) {
		super(props);
		this.state = {greetings: 'Hello', list: 'Cars'}
	}

	render() {
		return(
			<div>
				<h1>{this.state.greetings}</h1>
				
			</div>
		)
	}

	
} 

export default Hello;