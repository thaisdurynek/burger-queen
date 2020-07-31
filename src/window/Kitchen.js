import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import firebase from '../configs/FirebaseConfig.js';
import Container from '../components/container/ContainerMenu.js';
import IdentificationTable from '../components/TextArea.js';
import Text from '../components/Text.js';
import Button from '../components/Button.js';
import ResumeOrder from '../components/ResumeOrder.js';
// import Menu from '../components/Menu.js';
import OptionsButton from '../components/OptionsButton.js';
import Faixa from '../assets/faixa.png';
import styled from 'styled-components';

const Img = styled.img`
  width: 60%;
  margin: 6px;
`;

const Kitchen = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    firebase.firestore().collection('Menu').onSnapshot((snapshot) => {
      const newMenu = snapshot.docs.map((doc) => ({ ...doc.data() }))
      setMenu(newMenu)
    })
  }, [])

  return (
    <Container direction="row" >
      <Container direction="column">
        <Img src={Faixa} />
        <Container direction="column" color="red">
          <Container direction="row" justify="center">
            <OptionsButton text='Café da Manhã' />
            <OptionsButton text='Menu Principal' />
            {/* <Container direction="column">
            {menu.map(elem => (
              <Menu
                img={elem.img}
                title={elem.item}
                price={`${elem.price} R$`}
              />
            ))}
          </Container> */}
          </Container>
        </Container>
      </Container>
      <Container direction="column">
        <ResumeOrder>
          <Container direction="row" justify="center">
            <Text size="28px" text="Mesa:" />
            <IdentificationTable width="30%" />
          </Container>
          <Container direction="row" justify="center">
            <Text size="20px" text="Resumo do Pedido" />
          </Container>
          <Container direction="column" align="center">
            <IdentificationTable width="80%" placeholder="Observações" />
            <Button text="Concluir Pedido" />
          </Container>
        </ResumeOrder>
      </Container>
    </Container >
  );
};

export default withRouter(Kitchen);
