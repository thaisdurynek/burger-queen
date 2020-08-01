import React from 'react';
import styled from 'styled-components';

const Cards = styled.div`
  text-align: center;
  width: 140px;
  height: auto;
  padding: 15px;
  margin: 8px;
  border: 2px solid  #0AA7E2;
  border-radius: 16px;
  background-color: #fff;
  img {
    margin: 5px;
    width:80px;
    height: 80px;
    border-radius: 50px;
  }
`;

const Menu = (props) => {
  return (
  <Cards onChange={props.onChange}>
    <figure>
      <img src={props.img} alt={props.alt}></img>
    </figure>
    <h4>{props.title}</h4>
    <p>{props.price}</p>
  </Cards>
  );
};

export default Menu;