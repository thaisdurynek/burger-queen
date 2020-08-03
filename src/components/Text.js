import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
  color: black;
  font-size: ${props => props.size};
  padding: 6px;
  text-align: center;
  margin: 0 0 38px 0;
`;

function TextDefault(props) {
  return (
    <Text size={props.size} onChange={props.onChange}>{props.text}</Text>
  );
};

export default TextDefault;