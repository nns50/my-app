import React, { Component } from 'react';
import axios from 'axios';

import Textbox from './textbox';

class RandomData extends Component {
	constructor(props) {
		super(props)
		this.state = {persons: [] }
	}
	
	componentDidMount() {
    axios.get(`	https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json`)
      .then(res => {
      	console.log(res.data.Results)
        const persons = res.data.Results.slice(0,10);
				this.setState({ persons });
			})
		}
	
	handleaddCar(person){
		let persons = this.state.persons;
		persons.push(person);
		this.setState({persons: persons});

	}

	render() {
		let brands = this.state.persons.map(person => <li key={person.Make_ID}> {person.Make_Name} </li>)
		return(
			<div>
				<Textbox addCar = {this.handleaddCar.bind(this)} />
				<ul className = "Json">
							{ brands }
				</ul>
			</div>
		)

	}
	
} 

export default RandomData;