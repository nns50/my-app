import React, { Component } from 'react';
import car from '../images/bluecar.jpg';

// let img = require('../images/bg_image.jpg')

// let sectionStyle = {
//     backgroundImage: 'url(' + {img} + ')',
//     width: '100%',
//     height: '400%'
// }

class BG extends Component {

	

	render() {
        let img = require('../images/bluecar.jpg')

        let sectionStyle = {
            backgroundImage: 'url(' + {img} + ')',
            width: '100%',
            height: '400%'
        }
		return(
            <div style = {{backgroundImage: 'url(' + require('../images/bluecar.jpg') + ')'}} >
            </div>
		)
	}

	
} 

export default BG;