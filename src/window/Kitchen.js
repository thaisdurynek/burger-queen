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
import SignOut from '../configs/FirebaseSignOut'
import Item from '../components/OrderItem.js';

const Img = styled.img`
  width: 30%;
  margin: 30px;
`;

const Kitchen = (props) => {
  const [menu, setMenu] = useState([]);
  const [order, setOrder] = useState([]);
  const [finalOrder, setFinalOrder] = useState({})

  useEffect(() => {
    firebase.firestore().collection('Menu').onSnapshot((snapshot) => {
      const newMenu = snapshot.docs.map((doc) => ({ ...doc.data() })) 
      setMenu(newMenu)
    })
  }, [menu, order, finalOrder])

  const logout = (event) => {
    event.preventDefault();
    SignOut(props);
  }

  const clickMenuItem = (e, price, item) => {
    e.preventDefault();
    setOrder([...order, { price, item}]);
  }

  const sendOrder = (e) => {
    e.preventDefault();
    console.log(finalOrder, order)
  }

  const deleteItem = (e, key) => {
    e.preventDefault();
    order.splice(key, 1);
  }
  

  return (
    <Container direction="row" >
      <Container direction="column" width="70%">
        <Container justify="center" background="#F5F5F5">
          <Img src={Faixa} />
          <Button text='Sair' color='black' background='white' height='50%' onClick={logout}/>
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
            onClick={(event) => clickMenuItem(event, elem.price, elem.item)}
             />
          ))}
        </Container>
      </Container>
      <Container direction="column" height="100%">
        <ResumeOrder>
          <Container direction="row" justify="center">
            <Text size="20px" text="Mesa:" />
            <Note onChange={(e) => setFinalOrder({...finalOrder, table: e.target.value})}
            width='30%' 
            height='10%' 
            />
          </Container>
          <Container direction="row" justify="center">
            <Text size="20px" text="Nome:" />
            <Note onChange={(e) => setFinalOrder({...finalOrder, name: e.target.value})} 
            width='30%' 
            height='10%' 
            />
          </Container>
          <Container direction="row" justify="center">
            <Text size="20px" text="Resumo do Pedido" margin="2px" />
          </Container>
          <Container direction="column" align="center">
            {order.map((i, index) => (
              <Item key={index} 
              title={i.item} 
              price={`${i.price} R$`}
              onClick={(event) => deleteItem(event, index)}
              />
            ))}
          </Container>
          <Container direction="column" justify="flex-end" align="center">
            <Note onChange={(e) => setFinalOrder({...finalOrder, obs: e.target.value})}
            width="80%" 
            placeholder="Observações"
            />
            <Button onClick={sendOrder} text="Concluir Pedido" width="80%" height="40%" />
          </Container>
        </ResumeOrder>
      </Container>
    </Container >
  );
};

export default withRouter(Kitchen);
