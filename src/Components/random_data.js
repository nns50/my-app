import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

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
    songs: []
  }

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

      axios.get(`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=af94ca0cad8ea170d3975a5ab9942a86&artist=Cher&album=Believe&format=json`)
      .then(res => {
      	// console.log("test1: " + JSON.stringify(res.data));
        const list = res.data;
        const songs = []
        songs.push(list)
        console.log(JSON.stringify(songs));
        this.setState({ songs });
      })
  }



	render() {
		let brands = this.state.persons.map(person => <li key={person.Make_ID}> {person.Make_Name} </li>)
		return(
			<ul className = "Json">
        		{ this.state.persons.map(person => <li key={person.Make_ID}> {person.Make_Name}, {person.Make_ID} </li>)}
        		{ this.state.songs.map(i => i.album.tracks.track.map(a => <li key={a.name}> {a.name} </li>)) }
      		</ul>

		)

	}
	
} 

// { this.state.songs.map(image => <li key={image.size}> {image.size} </li>)}

export default RandomData;