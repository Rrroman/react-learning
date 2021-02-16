import React from 'react';
import './Char.css';

const Char = (props) => {
  const style = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    border: '1px solid black',
    cursor: 'pointer',
  };

  const colors = ['blue', 'yellow', 'tomato'];
  const classes = [];

  if (props.index % 2) {
    style.color = colors[0];
  }

  if (props.index % 3) {
    style.color = colors[1];
    classes.push('bold');
  }

  if (props.index % 5) {
    style.color = colors[2];
    classes.push('border-radius');
  }

  return (
    <p style={style} onClick={props.deleteChar} className={classes.join(' ')}>
      {props.character}
    </p>
  );
};

export default Char;
