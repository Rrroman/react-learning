import React from 'react';

const Validation = (props) => {
  const message = props.textLength;
  return (
    // <p>{props.textLength < 5 ? 'Text is too short' : 'Text long enough'}</p>
    <p>{message}</p>
  );
};

export default Validation;
