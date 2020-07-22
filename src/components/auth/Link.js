import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
    font-size: 16px;
    font-family: 'Work Sans', sans-serif;
    color:  #0AA7E2;
    text-align: center;
    margin: 16px 0 32px 0;
`;

function Redirection(props) {
    return (
    <Link>{props.text}{props.link}</Link>
    );
};

export default  Redirection;