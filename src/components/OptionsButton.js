import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 100px;
  height: 100px;
  margin: 50px;
  padding: 10px;
  border: 0.5px solid #F6F6F6;
  border-radius: 50px;
  background-color: #fff;
  &:hover{
    background-color: #FF1B5F;
    color: white;
  }
`;

const OptionsButton = (props) => {
  return (
    <Button onClick={props.onClick}>{props.text}</Button>
  );
};

export default OptionsButton;