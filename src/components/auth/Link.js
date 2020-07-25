import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
    font-size: 16px;
    color:  #0AA7E2;
    text-align: center;
    margin: 16px 0 32px 0;
`;

function Redirection(props) {
  return (
    <Link>{props.text}{props.children}</Link>
  );
};

export default Redirection;