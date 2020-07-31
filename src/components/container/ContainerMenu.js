import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  flex-wrap: ${props => props.wrap || "none"};;
  justify-content: ${props => props.justify || "none"};
  padding: ${props => props.padding || "none"};
  align-items: ${props => props.align || "none"};
  background-color: ${props => props.color || "#fff"};
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
    >{props.children}</Container>
  );
};

export default MenuContainer;