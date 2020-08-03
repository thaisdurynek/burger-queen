import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import firebase from '../configs/FirebaseConfig.js';
import Container from '../components/container/ContainerMenu.js';
import Note from '../components/TextArea.js';
import Text from '../components/Text.js';
import Button from '../components/Button.js';
import ResumeOrder from '../components/ResumeOrder.js';
import Menu from '../components/Menu.js';
import Faixa from '../assets/faixa.png';
import styled from 'styled-components';
import Item from '../components/OrderItem.js';
import SignOut from '../configs/FirebaseSignOut'

const Img = styled.img`
  width: 90%;
  margin: 6px;
`;

const Kitchen = (props) => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    firebase.firestore().collection('Menu').onSnapshot((snapshot) => {
      const newMenu = snapshot.docs.map((doc) => ({ ...doc.data() }))
      
      setMenu(newMenu)
    })
  }, [])

  const logout = (event) => {
    event.preventDefault();
    SignOut(props);
  }

  return (
    <Container direction="row" >
      <Container direction="column" width="70%" aling="center" background="#F5F5F5">
        <Container direction='row' justify='space-around'>
          <Img src={Faixa} />
          <Button text='Sair' color='black' background='white' height='30%' onClick={logout}/>
        </Container>
        <Container direction="row" justify="center" background="#F5F5F5">
          <Button text="Café da Manhã" color="black" background="white" height="80%" width="30%" font="22px" />
          <Button text="Menu Principal" color="black" background="white" height="80%" width="30%" font="22px" />
        </Container>
        <Container direction="row" wrap="wrap" justify="center" background="#F5F5F5" padding="14px 0 0 0">
          {menu.map(elem => (
            <Menu
            key={elem.item}
            img={elem.img}
            alt={elem.item} 
            title={elem.item} 
            price={`${elem.price} R$`}
             />
          ))}
        </Container>
      </Container>
      <Container direction="column" height="100%">
        <ResumeOrder>
          <Container direction="row" justify="center">
            <Text size="28px" text="Mesa:" />
            <Note />
          </Container>
          <Container direction="row" justify="center">
            <Text size="20px" text="Resumo do Pedido" margin="2px" />
          </Container>
          <Container direction="column" align="center">
            <Item
              title={`Titulo`}
              price={`Preço`} />
            <Item
              title={`Titulo`}
              price={`Preço`} />
            <Item
              title={`Titulo`}
              price={`Preço`} />
          </Container>
          <Container direction="column" justify="flex-end" align="center">
            <Note width="80%" placeholder="Observações" />
            <Button text="Concluir Pedido" width="80%" height="40%" />
          </Container>
        </ResumeOrder>
      </Container>
    </Container >
  );
};

export default withRouter(Kitchen);
