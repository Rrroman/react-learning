import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Validation from './Validation/Validation';
import Char from './Char/Char';
import WishlistForm from './Codewars/Codewars';
import BeamMeUpStatey from './Codewars/BeamMeUpStatey';

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
    messageArray: [],
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
    this.setState({ messageArray: event.target.value.split('') });
  };

  deleteCharHandler = (index, event) => {
    const messageArrayCopy = [...this.state.messageArray];
    messageArrayCopy.splice(index, 1);

    console.log(messageArrayCopy.length);

    this.setState({
      messageArray: messageArrayCopy,
      textMessage: messageArrayCopy.join(''),
      textLength: messageArrayCopy.length,
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
      const messageArray = this.state.messageArray;

      message = (
        <div>
          {messageArray.map((char, index) => (
            <Char
              index={index}
              key={index}
              character={char}
              deleteChar={this.deleteCharHandler.bind(this, index)}
            />
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
            value={this.state.textMessage}
            onClick={this.selectInputHandler}
            onChange={(event) => {
              this.setTextLengthHandler(event);
              this.setTextHandler(event);
            }}
          />
          <p>{this.state.textLength}</p>
          <Validation textLength={this.state.textLength} />
          {message}
        </div>
        <WishlistForm />
        <BeamMeUpStatey />
      </div>
    );
  }
}

export default App;
