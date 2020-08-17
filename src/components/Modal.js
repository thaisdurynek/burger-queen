import React from 'react';
import Input from './Input';
import styled from 'styled-components';
import Container from './container/ContainerMenu';
import Button from './Button';

const Background = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Close = styled.button`
  width: 25px;
  height: 25px;
  background-color: black;
  color: white;
  position: absolute;
  right: 1%;
  top: 1%;
  border-radius: 50%;
`;

const Modal = (props) => {
    return (
        <Background>
          <Container 
          color='white' 
          width='60%' 
          height='50%' 
          justify='space-evenly'  
          direction='column'
          radius='8px'
          padding='30px'
          >
            <Close onClick={props.onClose}>X</Close>
            <h3>Tipo de hamburguer</h3>
            <Container direction='row' justify='space-evenly'>
              <Input onChange={props.onChangeBurger} type='radio' value='Bovino' name='hamburger'/>
              <Input onChange={props.onChangeBurger} type='radio' value='Frango' name='hamburger'/>
              <Input onChange={props.onChangeBurger} type='radio' value='Vegano' name='hamburger'/>
            </Container>
            <h3>Extra</h3>
            <Container direction='row' justify='space-evenly'>
              <Input onChange={props.onChangeExtra} type='radio' value='Ovo' name='extra'/>
              <Input onChange={props.onChangeExtra} type='radio' value='Queijo' name='extra'/>
              <Input onChange={props.onChangeExtra} type='radio' value='Nenhum' name='extra'/>
            </Container>
            <Button onClick={props.onClick} text='Enviar' />
          </Container>
        </Background>
    )
}

export default Modal;