import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  width: 80%;
  height: auto;
  padding: 4px;
  margin: 8px;
`;

const OrderItem = (props) => {
  return (
    <Item>
      <h4>{props.title}</h4>
      <p>{props.price}</p>
    </Item>
  );
};

export default OrderItem;