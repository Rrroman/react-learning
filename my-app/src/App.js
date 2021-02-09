import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  style = {
    backgroundColor: 'coral',
    padding: '5px',
    borderRadius: '5px',
    color: 'forest',
    cursor: 'pointer',
  };

  state = {
    persons: [
      { name: 'John', age: 25 },
      { name: 'Doe', age: 40 },
      { name: 'Jill', age: 30 },
    ],
    greeting: 'Hello',
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: 'John', age: 24 },
        { name: 'Doe', age: 40 },
        { name: newName, age: 35 },
      ],
    });
  };

  inputNameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'John', age: 20 },
        { name: event.target.value, age: 25 },
        { name: 'Jill', age: 25 },
      ],
    });
  };

  selectInputHandler(event) {
    event.target.select();
  }

  render() {
    return (
      <div className="App">
        <div className="app__title">Hello there!</div>
        <button
          style={this.style}
          onClick={this.switchNameHandler.bind(this, 'Roman!!!')}
        >
          Switch name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Roman')}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          inputNameChange={this.inputNameChangeHandler}
          selectInput={this.selectInputHandler}
        >
          My hobby is chess.
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
