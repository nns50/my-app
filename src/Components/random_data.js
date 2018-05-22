import React, { Component } from 'react';
import axios from 'axios';

class RandomData extends Component {
	
	state = {
    persons: []
  }

	
	componentDidMount() {
    axios.get(`	https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json`)
      .then(res => {
      	console.log(res.data.Results)
        const persons = res.data.Results.slice(0,10);
        this.setState({ persons });
      })
  }

	render() {
		return(
			<ul className = "Json">
        		{ this.state.persons.map(person => <li key={person.Make_ID}> {person.Make_Name} {person.last_name} </li>)}
      		</ul>
		)
	}

	
} 

export default RandomData;