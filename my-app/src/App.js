import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Validation from './Validation/Validation';
import Char from './Char/char';

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
    textLength: 0,
    textLengthValidMessage: 'We will count if text is big enough.',
    textMessage: '',
  };

  deletePersonHandler = (index) => {
    const personsArray = [...this.state.persons];
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

  setTextLengthHandler = (event) => {
    this.setState({ textLength: event.target.value.length });
  };

  setTextHandler = (event) => {
    this.setState({ textMessage: event.target.value });
  };

  validationMessageHandler = () => {
    const message =
      this.state.textLength < 5 ? 'Text is too short' : 'Text long enough';
    this.setState({
      textLengthValidMessage: message,
    });
  };

  // printCharListHandler = () => {
  //   if (this.state.textMessage) {
  //     return (
  //       <div>
  //         {this.state.textMessage.split('').map((char) => (
  //           <Char character={char} />
  //         ))}
  //       </div>
  //     );
  //   }
  // };

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

    const textLengthBlockStyle = {
      width: '60%',
      backgroundColor: 'azure',
      margin: '10px auto',
      padding: '5px',
      borderRadius: '5px',
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

    let message = null;
    if (this.state.textMessage) {
      message = (
        <div>
          {this.state.textMessage.split('').map((char, index) => (
            <Char key={index} character={char} />
          ))}
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
        <div style={textLengthBlockStyle}>
          <input
            type="text"
            placeholder="Enter text"
            onChange={(event) => {
              this.setTextLengthHandler(event);
              this.setTextHandler(event);
              this.validationMessageHandler(event);
            }}
          />
          <p>{this.state.textLength}</p>
          <Validation textLength={this.state.textLengthValidMessage} />
          {/* <Validation textLength={this.state.textLength}/> */}
          {/* {this.printCharListHandler()} */}
          {message}
        </div>
      </div>
    );
  }
}

export default App;
