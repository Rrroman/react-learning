import React from 'react';
import classes from './Char.module.css';

const Char = (props) => {
  const style = {};

  const colors = ['blue', 'yellow', 'tomato'];
  const CharClasses = [];

  if (props.index % 2 === 0) {
    style.color = colors[0];
  }

  if (props.index % 3 === 0) {
    style.color = colors[1];
    CharClasses.push('bold');
  }

  if (props.index % 4 === 0) {
    style.color = colors[3];
    CharClasses.push('border-radius50');
  }

  if (props.index % 5 === 0) {
    style.color = colors[2];
    CharClasses.push('border-radius');
  }

  return (
    <p
      style={style}
      onClick={props.deleteChar}
      className={`${classes[CharClasses.join(' ')]} ${classes.Char}`}
    >
      {props.character}
    </p>
  );
};

export default Char;
