import React, { PureComponent } from 'react';
// import React, { Component } from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Person from './Person/Person';

class Persons extends PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('PersonS.js -> shouldComponentUpdate', nextProps, nextState);
  //   if (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.deletePerson !== this.props.deletePerson ||
  //     nextProps.changed !== this.props.changed
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('PersonS.js -> getSnapshotBeforeUpdate', prevProps, prevState);
    return { prevProps: prevProps.persons, message: 'Snap Shotted!' };
    // return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('PersonS.js -> componentDidUpdate', prevProps, prevState);
    console.log(snapshot);
  }

  render() {
    console.log('PersonS.js -> rendering');
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
