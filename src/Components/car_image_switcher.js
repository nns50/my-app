import React, { Component } from 'react';
import bluecar from '../images/bluecar.jpg';
import yellowcar from '../images/yellowcar.jpg';
import redcar from '../images/redcar.jpg';

class ImageSwitcher extends Component {

	constructor(props){
    super(props);
    this.state = {color: 'Blue Car', car: bluecar}
  }

  updateColor = () => {
    if (this.state.color === 'Blue Car') {
      this.setState({color: 'Yellow Car'})
    }
    else if (this.state.color === 'Yellow Car'){
      this.setState({color: 'Red Car'})
    }
    else{
      this.setState({color: 'Blue Car'})
    }

    console.log('Click')
    
  }

  updateCar = () => {
    if (this.state.car === bluecar) {
      this.setState({car: yellowcar})
    }
    else if (this.state.car === yellowcar){
      this.setState({car: redcar})
    }
    else{
      this.setState({car: bluecar})
    }
    
    this.updateColor()
  }
  
  render() {
	return (
		<div>
			<h2 className= "color-title">{this.state.color}</h2>
			<img src={this.state.car} className="App-Car" alt="car"/>
			<br/>
			<button onClick = {this.updateCar} className = "changerbutton">Change Color</button>
		</div>
	)
	}
}

export default ImageSwitcher;