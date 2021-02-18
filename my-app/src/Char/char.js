import React from 'react';
import './Char.css';
import Radium from 'radium';

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

  if (props.index % 2 === 0) {
    style.color = colors[0];
  }

  if (props.index % 3 === 0) {
    style.color = colors[1];
    classes.push('bold');
    style[':hover'] = {
      backgroundColor: 'pink',
    };
  }

  if (props.index % 4 === 0) {
    style.color = colors[3];
    classes.push('border-radius50');
  }

  if (props.index % 5 === 0) {
    style.color = colors[2];
    classes.push('border-radius');
  }

  return (
    <p style={style} onClick={props.deleteChar} className={classes.join(' ')}>
      {props.character}
    </p>
  );
};

export default Radium(Char);
