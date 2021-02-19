import React, { Component } from 'react';
import classes from './Person.module.css';

class Person extends Component {
  render() {
    const random = Math.random();

    if (random > 0.98) {
      throw new Error('Something went wrong');
    }

    return (
      <div className={classes.Person}>
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
      </div>
    );
  }
}

export default Person;
