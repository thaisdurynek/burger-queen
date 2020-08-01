import React from 'react';
import styled from 'styled-components';

const Mains = styled.main`
  flex-grow: 1;
  padding: 0 10%;
  display: flex;
  flex-direction: column;
  align-content: center;
`;

function Main(props) {
  return (
    <Mains>{props.children}</Mains>
  );
};

export default Main;