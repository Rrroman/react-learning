import React from 'react';
import classes from './Chars.module.css';

import Validation from '../Validation/Validation';
import Char from './Char/Char';

const Chars = (props) => {
  let message = null;
  if (props.textMessage) {
    const messageArray = props.messageArray;

    message = (
      <div>
        {messageArray.map((char, index) => (
          <Char
            index={index}
            key={index}
            character={char}
            deletedChar={props.deletedChar.bind(this, index)}
          />
        ))}
      </div>
    );
  }

  return (
    <div className={classes.text}>
      <input
        type="text"
        placeholder="Enter text"
        value={props.textMessage}
        onClick={props.clicked}
        onChange={(event) => {
          props.changedTextLength(event);
          props.changedText(event);
        }}
      />
      <p>{props.textLength}</p>
      <Validation textLength={props.textLength} />
      {message}
    </div>
  );
};

export default Chars;
