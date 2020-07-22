import React from 'react';
import styled from 'styled-components';

const Error = styled.h2`
    font-size: 12px;
    font-family: 'Work Sans', sans-serif;
    color: red;
    text-align: center;
`;

function ErrorMensage(props) {
    return (
        <Error>{props.err}</Error>
    );
};

export default ErrorMensage;