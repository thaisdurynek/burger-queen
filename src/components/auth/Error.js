import React from 'react';
import styled from 'styled-components';

const Error = styled.h2`
    font-size: 12px;
    color: red;
    text-align: center;
`;

function ErrorMensage(props) {
  return (
    <Error>{props.err}</Error>
  );
};

export default ErrorMensage;