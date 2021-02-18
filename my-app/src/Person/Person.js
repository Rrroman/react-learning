import React from 'react';
import classes from './Person.module.css';

const person = (props) => {
  return (
    <div className={classes.Person}>
      <p onClick={props.deletePerson}>
        {props.name} is here and my age is {props.age}
      </p>
      <input
        className={classes['Person-input']}
        type="text"
        onChange={props.inputNameChange}
        defaultValue={props.name}
        onFocus={props.selectInput}
      />
      <p>{props.children}</p>
    </div>
  );
};

export default person;
