import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: ${props => props.padding || "10px"};
  width: ${props => props.width || "auto"};
  height: ${props => props.height || "auto"};
  background-color: ${props => props.background || "#0AA7E2"};
  border: 2px solid #0AA7E2;
  border-radius: 30px;
  color: ${props => props.color || "#FFF"};  
  font-size: ${props => props.font || "18px"};
  margin:${props => props.margin || "12px"};
  outline: none;
  &:hover {
    background-color: #1E7B9E;
    color: white;
    border: #1E7B9E;
  }
  @media (min-width: 320px) and (max-width: 500px) {
    margin: 16px 0 12px 0;
    font-size: ${props => props.mediaFont || "14px"};
    width: ${props => props.mediaWidth || "auto"};
    height: ${props => props.mediaHeight || "auto"};
    align-items: center;
  };
`;

function ButtonLogin(props) {
  return (
    <Button 
    type={props.type} 
    onClick={props.onClick}
    padding={props.padding}
    width={props.width}
    height={props.height}
    background={props.background}
    color={props.color}
    font={props.font}
    margin={props.margin}
    mediaFont={props.mediaFont}
    >{props.text}</Button>
  );
};

export default ButtonLogin;
