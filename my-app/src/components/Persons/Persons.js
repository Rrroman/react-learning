import React, { Component } from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Person from './Person/Person';

class Persons extends Component {
  render() {
    return this.props.persons.map((person, index) => {
      return (
        <ErrorBoundary key={person.id}>
          <Person
            name={person.name}
            age={person.age}
            deletePerson={this.props.clicked.bind(this, index)}
            changed={this.props.changed.bind(this, person.id)}
            focused={this.props.focused}
          />
        </ErrorBoundary>
      );
    });
  }
}

export default Persons;
