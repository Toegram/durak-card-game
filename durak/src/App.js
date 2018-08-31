import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Playmat from './components/Playmat.js'

class App extends Component {
  render() {
    console.log(this.deck)
    return (
      <div className="App">
        Helloo
        <Playmat />
      </div>
    );
  }
}

export default App;
