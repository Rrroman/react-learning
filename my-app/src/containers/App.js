import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import UserInput from '../components/UserInput/UserInput';
import UserOutput from '../components/UserOutput/UserOutput';
import Greeting from '../components/Greeting/Greeting';
import Chars from '../components/Chars/Chars';
// import WishlistForm from './Codewars/Codewars';
// import BeamMeUpStatey from './Codewars/BeamMeUpStatey';
// import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

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

  deleteCharHandler = (index) => {
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
    let persons = null;

    if (this.state.showNames) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.inputNameChangeHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Greeting clicked={this.toggleNameHandler} />
        {persons}
        <UserInput
          userNameChange={this.userNameChangeHandler}
          defaultValue={this.state.userName}
          selectInput={this.selectInputHandler}
        />
        <UserOutput userName={this.state.userName} />
        <UserOutput userName={this.state.userName} />
        <Chars
          textMessage={this.state.textMessage}
          clicked={this.selectInputHandler}
          changedTextLength={this.setTextLengthHandler.bind(this)}
          changedText={this.setTextHandler.bind(this)}
          messageArray={this.state.messageArray}
          deletedChar={this.deleteCharHandler}
        />
        {/* <WishlistForm /> */}
        {/* <BeamMeUpStatey /> */}
      </div>
    );
  }
}

export default App;
