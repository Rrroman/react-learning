import React from 'react';

const Char = (props) => {
  const style = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    border: '1px solid black',
  };
  return <p style={style}>{props.character}</p>;
};

export default Char;
