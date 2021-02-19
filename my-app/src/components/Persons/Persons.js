import React from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Person from './Person/Person';

const Persons = (props) =>
  props.persons.map((person, index) => {
    return (
      <ErrorBoundary>
        <Person
          name={person.name}
          age={person.age}
          key={person.id}
          deletePerson={props.clicked.bind(this, index)}
          inputNameChange={props.changed.bind(this, person.id)}
        />
      </ErrorBoundary>
    );
  });

export default Persons;
