
import ContainerResume from '../components/container/ContainerResume.js';
import SaloonContainer from '../components/container/ContainerSaloon.js';
import ContainerOrder from '../components/container/ContainerOrder.js';
import ContainerNotesOrder from '../components/container/ContainerNotesOrder.js';
import Logo from '../components/Logo.js';

import IdentificationTable from '../components/TextArea.js';
import Text from '../components/Text.js';
import Button from '../components/Button.js';
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Menu from '../components/Menu.js';
import MenuContainer from '../components/container/ContainerMenu.js';
import OptionsButton from '../components/OptionsButton.js';
import firebase from '../configs/FirebaseConfig.js';

const Kitchen = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    firebase.firestore().collection('Menu').onSnapshot((snapshot) => {
      const newMenu = snapshot.docs.map((doc) => ({ ...doc.data() }))
      setMenu(newMenu)
    })
  }, [])

  return (
    <SaloonContainer>
      <MenuContainer>
        <Logo text='Burger Queen' />
        <MenuContainer>
          <OptionsButton text='Café da Manhã' />
          <OptionsButton text='Menu Principal' />
          {menu.map(elem => (
            <Menu
              img={elem.img}
              title={elem.item}
              price={`${elem.price} R$`}
            />
          ))}
        </MenuContainer>
      </MenuContainer>
      <ContainerOrder>
        <ContainerResume>
          <Text size="28px" text="Mesa:" />
          <IdentificationTable width="30%" />
        </ContainerResume>
        <ContainerResume>
          <Text size="20px" text="Resumo do Pedido" />
        </ContainerResume>
        <ContainerNotesOrder>
          <IdentificationTable width="80%" placeholder="Observações" />
          <Button text="Concluir Pedido" />
        </ContainerNotesOrder>
      </ContainerOrder>
    </SaloonContainer>
  );
};

export default withRouter(Kitchen);
