import React, { Component } from 'react';
import axios from 'axios';

class RandomData extends Component {

	// constructor(props){
	// 	super(props);
	// 	this.state = {
	// 		persons: [],
	// 		albums: []
	// 	}
	// }
	
	state = {
    persons: [],
    albums: []
  }

	
	componentDidMount() {
    axios.get(`	https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json`)
      .then(res => {
      	console.log(res.data.Results)
        const persons = res.data.Results.slice(0,10);
        this.setState({ persons });
      })

      axios.get(`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=af94ca0cad8ea170d3975a5ab9942a86&artist=Cher&album=Believe&format=json`)
      .then(res => {
      	console.log("test1: " + res.data.album.image)
        const albums = res.data.album.image;
        console.log(JSON.stringify(albums));
        this.setState({ albums });
      })
  }

	render() {
		return(
			<ul className = "Json">
        		{ this.state.persons.map(person => <li key={person.Make_ID}> {person.Make_Name}, {person.Make_ID} </li>)}
        		{ this.state.albums.map(image => <li key={image.size}> {image.size} </li>)}
      		</ul>

		)
	}

	
} 

export default RandomData;