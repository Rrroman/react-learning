import React, { useEffect } from 'react';
import classes from './Greeting.module.css';

const Greeting = (props) => {
  useEffect(() => {
    console.log('Greeting.js -> useEffecting...');
    setTimeout(() => {
      alert('Saved data to cloud!');
    }, 1000);
    // if empty array - [], same behavior as componentDidMount ( Only first time will fire)
  }, []);
  // }, [props.persons]);

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
