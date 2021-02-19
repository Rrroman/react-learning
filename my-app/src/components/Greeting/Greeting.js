import React from 'react';
import classes from './Greeting.module.css';

const Greeting = (props) => {
  return (
    <div>
      <div className={classes.greeting__title}>{props.appTitle}</div>
      <button className={classes.greeting__button} onClick={props.clicked}>
        Toggle names
      </button>
    </div>
  );
};

export default Greeting;
