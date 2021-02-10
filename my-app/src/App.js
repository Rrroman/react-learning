import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    persons: [
      { name: 'John', age: 25 },
      { name: 'Doe', age: 40 },
      { name: 'Jill', age: 30 },
    ],
    greeting: 'Hello',
    userName: 'Default User',
    showNames: false,
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

  userNameChangeHandler = (event) => {
    const userName = event.target.value;

    this.setState({
      userName: userName,
    });
  };

  toggleNameHandler = () => {
    const doesShow = this.state.showNames;

    this.setState({
      showNames: !doesShow,
    });
  };

  render() {
    const style = {
      display: 'block',
      margin: '10px auto',
      padding: '5px',

      backgroundColor: 'coral',
      borderRadius: '5px',
      color: 'forest',
      cursor: 'pointer',
    };

    let persons = null;

    if (this.state.showNames) {
      persons = (
        <div>
          {this.state.persons.map((person) => {
            return <Person name={person.name} age={person.age} />;
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <div className="app__title">Hello there!</div>
        <button style={style} onClick={this.toggleNameHandler}>
          Toggle names
        </button>
        {persons}
        <UserInput
          userNameChange={this.userNameChangeHandler}
          defaultValue={this.state.userName}
          selectInput={this.selectInputHandler}
        />
        <UserOutput userName={this.state.userName} />
        <UserOutput userName={this.state.userName} />
      </div>
    );
  }
}

export default App;
