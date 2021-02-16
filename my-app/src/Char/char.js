import React from 'react';

const Char = (props) => {
  const style = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    border: '1px solid black',
    cursor: 'pointer',
  };

  const colors = ['blue', 'yellow', 'red'];

  if (props.index % 2) {
    style.color = colors[0];
  }

  if (props.index % 3) {
    style.color = colors[1];
  }

  if (props.index % 5) {
    style.color = colors[2];
  }

  return (
    <p
      style={style}
      onClick={props.deleteChar}
      // className={colors.join(' ')}
    >
      {props.character}
    </p>
  );
};

export default Char;
