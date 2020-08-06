import React from 'react';
import styled from 'styled-components';

const Alert = styled.h2`
    font-size: 14px;
    color: ${props => props.color || "red"};
    text-align: center;
    margin-top: 10px;
`;

function AlertMensage(props) {
  return (
    <Alert
      color={props.color}>
      {props.text}
    </Alert>
  );
};

export default AlertMensage;