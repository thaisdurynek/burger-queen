import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const Notification = (props) => {
  return (
    <List>
      <li>
        <h4>Mesa {props.table} ({props.name})</h4>
        <p>{props.order}</p>
      </li>
      <button onClick={props.onClick}>Entregue</button>
    </List>
  )
}

export default Notification;