import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
  color: black;
  font-size: ${props => props.size};
  padding: 6px;
`;

function TextDefault(props) {
  return (
    <Text size={props.size}>{props.text}</Text>
  );
};

export default TextDefault;