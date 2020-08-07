import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  position: ${props => props.position || "relative"};
  flex-direction: ${props => props.direction || "row"};
  flex-wrap: ${props => props.wrap || "none"};;
  justify-content: ${props => props.justify || "none"};
  padding: ${props => props.padding || "0"};
  margin: ${props => props.margin || "none"};
  align-items: ${props => props.align || "none"};
  background-color: ${props => props.color || "none"};
  background-image: url(${props => props.background || "none"});
  overflow-y: ${props => props.overflow || "none"};
  background-size: cover;
  border-radius: ${props => props.radius || "none"};
  width: ${props => props.width || "auto"};
  height: ${props => props.height || "auto"};
  flex-grow: ${props => props.grow || "none"};
`;

const MenuContainer = (props) => {
  return (
    <Container
      position={props.position}
      direction={props.direction}
      justify={props.justify}
      wrap={props.wrap}
      padding={props.padding}
      margin={props.margin}
      align={props.align}
      color={props.color}
      background={props.background}
      overflow={props.overflow}
      radius={props.radius}
      width={props.width}
      height={props.height}
      grow={props.grow}
    >{props.children}</Container>
  );
};

export default MenuContainer;