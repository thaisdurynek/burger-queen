import React from 'react';
import styled from 'styled-components';

const Order = styled.div`
	margin-bottom: 10px;
  background-color: #fff;
  width: 40%;
  align-items: center;
`;

function ContainerOrder(props) {
  return (
    <Order>{props.children}</Order>
  );
};

export default ContainerOrder;