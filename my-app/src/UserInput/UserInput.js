import React from 'react';

const UserInput = (props) => {
  const userStyles = {
    backgroundColor: '#aeaeae',
    padding: '5px',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <input
      onChange={props.userNameChange}
      type="text"
      defaultValue={props.defaultValue}
      onFocus={props.selectInput}
      style={userStyles}
    />
  );
};

export default UserInput;
