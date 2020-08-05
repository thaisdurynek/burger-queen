import React from 'react';
import styled from 'styled-components';
import Delete from '../assets/delete.svg';
import Container from '../components/container/ContainerMenu.js';

const Item = styled.div`
  display: flex;
  justify-content: row;
  width: 80%;
  height: 50px;
  padding: 4px;
  margin: 12px;
`;

const Trash = styled.img`
  width: 16%;
`;

const OrderItem = (props) => {
  return (
    <Item>
      <Container direction="column" justify="flex-start" width="70%">
        <h4>{props.title}</h4>
        <p>{props.price}</p>
      </Container>
      <Container justify="flex-end" width="100%">
        <Trash
          src={Delete}
          alt="Deletar item"
          onClick={props.onClick}
        />
      </Container>
    </Item>
  );
};

export default OrderItem;