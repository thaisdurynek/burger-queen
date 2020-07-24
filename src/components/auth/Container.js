import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 320px) and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    background-image:none;
   }
`;

function Container(props) {
    return (
        <Section>{props.children}</Section>
    );
};

export default Container;