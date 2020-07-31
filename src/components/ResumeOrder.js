import React from 'react';
import styled from 'styled-components';

const Order = styled.div`
  padding: 6px;
  background-color: #fff;
  width: 100%;
`;

function ContainerOrder(props) {
  return (
    <Order>{props.children}</Order>
  );
};

export default ContainerOrder;