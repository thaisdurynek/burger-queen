import React from 'react';
import styled from 'styled-components';
import img from '../../assets/faixa.png';
import Button from '../Button';

const Img = styled.img`
  width: 50%;
  margin: 0 0 0 8%;
  @media (min-width: 320px) and (max-width: 500px) {
    width: 80%;
    height: auto;
    margin: 0;
  }
  @media (min-width: 1200px) and (max-width: 1500px) {
    width: 40%;
    height: auto;
    margin: 0 0 0 12%;
  }
`;

const Container = styled.header`
  width: 100%;
  height: auto;
  display: flex;
  position: absolute;
  z-index: 10;
  justify-content: space-between;
  align-items: start;
  padding: 20px;
  background-color: none;
  @media (min-width: 320px) and (max-width: 500px){
    justify-content: space-around;
    align-items: center;
    margin: 0;
  }
`;

const Header = (props) => {
  return (
    <Container>
      <Img src={img}/>
      <Button text='Sair' color='white' background='#0AA7E2' width="10%" height="76%" margin="0" onClick={props.onClick} />
    </Container>
  )
}

export default Header;