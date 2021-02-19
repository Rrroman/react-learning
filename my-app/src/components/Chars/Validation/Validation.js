import React from 'react';

const Validation = (props) => {
  return (
    <p>{props.textLength <= 5 ? 'Text is too short' : 'Text long enough'}</p>
  );
};

export default Validation;
