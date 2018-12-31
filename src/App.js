import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageSwitcher from './Components/car_image_switcher';
import NavBar from './Components/navbar';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ImageSwitcher />
          <br/>
        </header>
        <NavBar />
      </div>
    );
  }
}

export default App;
