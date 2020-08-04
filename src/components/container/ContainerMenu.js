import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  flex-wrap: ${props => props.wrap || "none"};;
  justify-content: ${props => props.justify || "none"};
  padding: ${props => props.padding || "0"};
  align-items: ${props => props.align || "none"};
  background-color: ${props => props.color || "none"};
  background-image: url(${props => props.background || "none"});
  background-size: contain;
  width: ${props => props.width || "auto"};
  height: ${props => props.height || "auto"};
  flex-grow: ${props => props.grow || "none"};
`;

const MenuContainer = (props) => {
  return (
    <Container
      direction={props.direction}
      justify={props.justify}
      wrap={props.wrap}
      padding={props.padding}
      align={props.align}
      color={props.color}
      background={props.background}
      width={props.width}
      height={props.height}
      grow={props.grow}
    >{props.children}</Container>
  );
};

export default MenuContainer;