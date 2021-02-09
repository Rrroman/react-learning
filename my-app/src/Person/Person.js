import React from 'react';

const person = (props) => {
  return (
    <div>
      <p onClick={props.click}>
        {props.name} is here and my age is {props.age}, i am feeling like i am{' '}
        {Math.floor(Math.random() * 60)}.
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
