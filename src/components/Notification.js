import React from 'react';
import styled from 'styled-components';
import CheckImg from '../assets/check.png';

const List = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
`;

const Check = styled.img`
  width: 30px;
  height: 30px;
`;

const Notification = (props) => {
  return (
    <List>
      <div>
        <h4>Mesa {props.table} ({props.name})</h4>
        <p>{props.order}</p>
      </div>
      <Check src={CheckImg} alt="Check" onClick={props.onClick} />
    </List>
  )
}

export default Notification;