import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 42px;
    text-align: center;
    margin: 0 0 38px 0;
    @media (min-width: 320px) and (max-width: 500px) {
        font-size: 28px;
        margin: 0 0 12px 0;
    }
`;

function TitlePages(props) {
    return (
    <Title>{props.text}</Title>
    );
};

export default TitlePages;