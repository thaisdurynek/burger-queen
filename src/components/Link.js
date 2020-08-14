import React from 'react';
import styled from 'styled-components';

const Link = styled.p`
    color:  #0AA7E2;
    text-align: center;
    margin: 16px 0 32px 0;
    background-color: ${props => props.background || 'none'};
    font-size: ${props => props.font || '16px'};
`;

function Redirection(props) {
  return (
    <Link 
    background={props.background}
    font={props.font}
    >
      {props.text}{props.children}
    </Link>
  );
};

export default Redirection;