import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
  color: ${props => props.color || "black"};
  font-size: ${props => props.size};
  padding: ${props => props.padding || "6px"};
  text-align: center;
  margin: ${props => props.margin || "0 0 32px 0"};
  @media (min-width: 320px) and (max-width: 500px) {
    font-size: ${props => props.mediaSize || '16px'}
  }
`;

function TextDefault(props) {
  return (
    <Text
      color={props.color}
      padding={props.padding}
      size={props.size}
      onChange={props.onChange}
      margin={props.margin}
    >{props.text}</Text>

  );
};

export default TextDefault;