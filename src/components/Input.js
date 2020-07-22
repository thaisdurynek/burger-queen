import React from 'react';
import styled from 'styled-components';

const Inputs = styled.input`
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 15px;
  background-color: #F6F6F6;
  border: 1px solid #E8E8E8;
`;
const Input = (props) => {
  return (
    <Inputs 
    type = {props.type}
    placeholder = {props.placeholder}
    value = {props.value}
    name = {props.name}
    >
    </Inputs>
  )
}

export default Input;