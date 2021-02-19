import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
  return (
    <div className="user-name">
      <p>{props.userName}</p>
    </div>
  );
};

export default UserOutput;
