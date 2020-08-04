import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  justify-content: ${props => props.justify || 'space-between'};
  width: 80%;
  height: auto;
  padding: 4px;
  margin: 8px;
`;

const OrderItem = (props) => {
  return (
    <Item justify={props.justify}>
      <div>
        <h4>{props.title}</h4>
        <p>{props.price}</p>
      </div>
      <button onClick={props.onClick}>delete</button>
    </Item>
  );
};

export default OrderItem;