import React, { Component } from 'react';
import car from '../images/bg_image.jpg';

class Hello extends Component {

	
	constructor(props) {
		super(props);
		this.state = {greetings: 'Hello', list: 'Cars'}
	}

	render() {
		return(
			<div className = 'BG' style = {{backgroundImage: 'url(' + require('../images/bg_image.jpg') + ')'}}>
				<div>
					<h1>{this.state.greetings}</h1>
				</div>
			</div>
		)
	}

	
} 

export default Hello;


// https://png.pngtree.com/thumb_back/fw800/back_pic/02/65/79/475788bc11dc678.jpg