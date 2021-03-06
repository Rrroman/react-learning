import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import UserInput from '../components/UserInput/UserInput';
import UserOutput from '../components/UserOutput/UserOutput';
import Greeting from '../components/Greeting/Greeting';
import Chars from '../components/Chars/Chars';
// import WishlistForm from './Codewars/Codewars';
// import BeamMeUpStatey from './Codewars/BeamMeUpStatey';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxillary';
import AuthContext from '../context/auth-context';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('App.js -> constructor');
  }

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
    textMessage: '',
    messageArray: [],
    showGreeting: true,
    changeCounter: 0,
    isLoggedIn: false,
  };

  static getDerivedStateFromProps(props, state) {
    console.log('App.js -> getDerivedStateFromProps', props, state);
    return state;
  }

  // componentWillMount() {
  //   console.log('App.js -> componentWillMount');
  // }

  componentDidMount() {
    console.log('App.js -> componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('App.js -> shouldComponentUpdate', nextProps, nextState);
    return true;
  }

  componentDidUpdate() {
    console.log('App.js -> componentDidUpdate');
  }

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

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1,
      };
    });
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

  toggleGreetingHandler = () => {
    this.setState({
      greeting: !this.state.greeting,
    });
  };

  loginHandler = () => {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  };

  render() {
    console.log('App.js -> rendering...');
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
      <Aux>
        <button
          className={classes.app__button}
          onClick={this.toggleGreetingHandler}
        >
          Toggle greeting
        </button>
        <AuthContext.Provider
          value={{
            isLoggedIn: this.state.isLoggedIn,
            login: this.loginHandler,
          }}
        >
          {this.state.greeting ? (
            <Greeting
              clicked={this.toggleNameHandler}
              appTitle={this.props.appTitle}
              persons={this.state.persons}
            />
          ) : null}
          {persons}
        </AuthContext.Provider>

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
          textLength={this.state.textLength}
        />
        {/* <WishlistForm /> */}
        {/* <BeamMeUpStatey /> */}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
