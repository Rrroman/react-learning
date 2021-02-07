import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="app__title">Hello there!</div>
        <Person name="Roman" age="31" />
        <Person name="Max" age="28" />
        <Person name="Julia" age="21" />
      </div>
    );
  }
}

export default App;
