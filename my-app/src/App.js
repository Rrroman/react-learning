import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = (props) => {
  const [personsState, setPersonState] = useState({
    persons: [
      { name: 'John', age: 25 },
      { name: 'Doe', age: 40 },
      { name: 'Jill', age: 30 },
    ],
  });

  const [otherPersonState] = useState({
    greeting: 'Hello',
  });

  console.log(personsState, otherPersonState);

  const switchNameHandler = () => {
    setPersonState({
      persons: [
        { name: 'Johnathan', age: 24 },
        { name: 'Doe', age: 40 },
        { name: 'Jill', age: 35 },
      ],
    });
  };

  return (
    <div className="App">
      <div className="app__title">Hello there!</div>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My hobby is chess.
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default App;
