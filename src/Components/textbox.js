import React, { Component } from 'react'

class Textbox extends Component {
    constructor(props) {
        super(props);
        this.state = {newcar: {} };

        //this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handleChange(event) {
    //     this.setState({newcar: event.target.value});
    // }

    handleSubmit(event) {
        if(this.refs.title.value === '') {
            alert('Car name required');
        }
        else {
            this.setState({newcar:{
                Make_Name: this.refs.title.value
            }},
        function(){
            this.props.addCar(this.state.newcar);
        });
        
    }
        event.preventDefault();
}




  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <label>
                Car Name: 
                <input type='text' ref="title"   />
            </label><br/><br/>
            <input type="submit" value="Submit"  className='addbutton'/>
        </form>
      </div>
    )
  }
}

export default Textbox;