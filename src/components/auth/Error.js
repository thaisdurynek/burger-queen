import React from 'react';
import styled from 'styled-components';

const Error = styled.h2`
    font-size: 14px;
    color: red;
    text-align: center;
    margin: 10px 0 0 0;
`;

function ErrorMensage(props) {
  return (
    <Error>
      {props.text}
    </Error>
  );
};

export default ErrorMensage;