import React from 'react';

const Char = (props) => {
  const style = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    border: '1px solid black',
    cursor: 'pointer',
  };
  return (
    <p style={style} onClick={props.deleteChar}>
      {props.character}
    </p>
  );
};

export default Char;
