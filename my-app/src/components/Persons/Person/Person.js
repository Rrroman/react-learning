import React, { Component, Fragment } from 'react';
import classes from './Person.module.css';
import Aux from '../../../hoc/Auxillary';
import withClass from '../../../hoc/withClass';

class Person extends Component {
  render() {
    console.log('Person.js -> rendering');

    const random = Math.random();

    if (random > 0.98) {
      throw new Error('Something went wrong');
    }

    return (
      // <div className={classes.Person}>
      // <React.Fragment>
      <Aux>
        <p onClick={this.props.deletePerson}>
          {this.props.name} is here and my age is {this.props.age}
        </p>
        <input
          className={classes['Person-input']}
          type="text"
          onChange={this.props.changed}
          defaultValue={this.props.name}
          onFocus={this.props.focused}
        />
        <p>{this.props.children}</p>
      </Aux>
      // </React.Fragment>
      //  </div>
    );
  }
}

export default withClass(Person, classes.Person);
