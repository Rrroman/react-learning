import React, { useEffect, useRef } from 'react';
import classes from './Greeting.module.css';

const Greeting = (props) => {
  const toggleButtonRef = useRef(null);

  useEffect(() => {
    console.log('Greeting.js -> useEffecting...');
    // setTimeout(() => {
    //   alert('Saved data to cloud!');
    // }, 1000);

    toggleButtonRef.current.click();
    return () => {
      console.log('Greeting.js -> clean Up work in useEffect');
    };
  }, []);

  useEffect(() => {
    console.log('Greeting.js -> 2nd useEffect');
    return () => {
      console.log('Greeting.js -> 2nd clean Up work in useEffect');
    };
  });

  return (
    <div>
      <div className={classes.greeting__title}>{props.appTitle}</div>
      <button
        className={classes.greeting__button}
        onClick={props.clicked}
        ref={toggleButtonRef}
      >
        Toggle names
      </button>
    </div>
  );
};

export default React.memo(Greeting);
