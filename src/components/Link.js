import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
    font-size: 12px;
    font-family: 'Work Sans', sans-serif;
    color:  #0AA7E2;
`;

function Redirection(props) {
    return (
    <Link>{props.text}{props.link}</Link>
    );
};

export default  Redirection;