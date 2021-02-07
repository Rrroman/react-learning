import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="app__title">Hello there!</div>
        <Person />
      </div>
    );
  }
}

export default App;
