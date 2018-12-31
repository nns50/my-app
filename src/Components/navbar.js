import React, { Component } from 'react'

export default class NavBar extends Component {
    constructor(props) {
    super(props);
    // this.state = {Navigation: Button}
    }

    navButton = () => {
        null
    }



    render() {
        return(
            <div>
                <div className="nav">
                    <a  href = '/carnames' >Car Names</a>
                    <br/>
                    <a  href = '/hello' >Greetings</a>
                </div>
            </div>
        )
    }
        
}
