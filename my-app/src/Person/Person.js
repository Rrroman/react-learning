import React from 'react';
// import './Person.css';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 50%;
  margin: 10px auto;
  padding: 10px;
  background-color: rgb(255, 140, 98);
  box-shadow: 3px 3px 3px #a3a2a2;
`;

const StyledInput = styled.input`
  @media (max-width: 600px) {
    width: 80%;
    background-color: #aaac4e;
  }
`;

const person = (props) => {
  return (
    <StyledDiv>
      <p onClick={props.deletePerson}>
        {props.name} is here and my age is {props.age}
      </p>
      <StyledInput
        type="text"
        onChange={props.inputNameChange}
        defaultValue={props.name}
        onFocus={props.selectInput}
      />
      <p>{props.children}</p>
    </StyledDiv>
  );
};

export default person;
