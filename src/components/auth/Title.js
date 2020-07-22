import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 42px;
    font-family: 'Inter', sans-serif;
    text-align: center;
    margin: 0 0 38px 0;
`;

function TitlePages(props) {
    return (
    <Title>{props.text}</Title>
    );
};

export default TitlePages;