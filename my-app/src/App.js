import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    persons: [
      { id: 'ls8i493', name: 'John', age: 25 },
      { id: 'l3sdf8', name: 'Doe', age: 40 },
      { id: 'as5df234', name: 'Jill', age: 30 },
    ],
    greeting: 'Hello',
    userName: 'Default User',
    showNames: false,
  };

  deletePersonHandler = (index) => {
    // const personsArray = this.state.persons; // This mutates the array. Bad practice
    // const personsArray = this.state.persons.slice() // Not mutating the array
    const personsArray = [...this.state.persons]; // Not mutating the array
    personsArray.splice(index, 1);

    this.setState({
      persons: personsArray,
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

  // 1)variant passing index
  // inputNameChangeHandler = (index, event) => {
  //   const person = { ...this.state.persons[index] };
  //   person.name = event.target.value;

  //   const persons = [...this.state.persons];
  //   persons[index] = person;

  //   this.setState({ persons: persons });
  // };

  // 2) variant how to find index with id
  inputNameChangeHandler = (id, event) => {
    const personIndex = this.state.persons.findIndex(
      (person) => person.id === id,
    );

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
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
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                key={person.id}
                deletePerson={this.deletePersonHandler.bind(this, index)}
                // inputNameChange={this.inputNameChangeHandler.bind(this, index)}
                inputNameChange={this.inputNameChangeHandler.bind(
                  this,
                  person.id,
                )}
              />
            );
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
