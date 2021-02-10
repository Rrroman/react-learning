import React from 'react';
import './Person.css';

const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.deletePerson}>
        {props.name} is here and my age is {props.age}
      </p>
      <input
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
