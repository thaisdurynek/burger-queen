import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 42px;
    font-family: 'Work Sans', sans-serif;
    text-align: center;
`;

function TitlePages(props) {
    return (
    <Title>{props.text}</Title>
    );
};

export default TitlePages;