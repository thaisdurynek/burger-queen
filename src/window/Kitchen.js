import React from 'react';
import MenuContainer from '../components/container/ContainerMenu.js';
import ContainerResume from '../components/container/ContainerResume.js';
import SaloonContainer from '../components/container/ContainerSaloon.js';
import ContainerOrder from '../components/container/ContainerOrder.js';
import ContainerNotesOrder from '../components/container/ContainerNotesOrder.js';
import Logo from '../components/Logo.js';
//import Menu from '../components/Menu.js';
import OptionsButton from '../components/OptionsButton.js';
import IdentificationTable from '../components/TextArea.js';
import Text from '../components/Text.js';
import Button from '../components/Button.js';
//import firebase from '../configs/FirebaseConfig.js';

const Kitchen = () => {
  //const [changeMenu, setChangeMenu] = useState('');
  const optionArray = (event) => {
    event.preventDefault();
  }
  console.log(optionArray);

  return (
    <SaloonContainer>
      <MenuContainer>
        <Logo text='Burger Queen' />
        <MenuContainer>
          <OptionsButton onClick={optionArray} text='Café da Manhã' />
          <OptionsButton text='Menu Principal' />
          {/* {Data.map(elem => (
            <Menu
            img={elem.img} 
            title={elem.item} 
            price={`${elem.price} R$`}
             />
          ))} */}
        </MenuContainer>
      </MenuContainer>
      <ContainerOrder>
        <ContainerResume>
          <Text size="28px" text="Mesa:" />
          <IdentificationTable width="30%"/>
        </ContainerResume>
        <ContainerResume>
          <Text size="20px" text="Resumo do Pedido" />
        </ContainerResume>
        <ContainerNotesOrder>
          <IdentificationTable width="80%" placeholder="Observações"/>
          <Button text="Concluir Pedido" />
        </ContainerNotesOrder>
      </ContainerOrder>
    </SaloonContainer>
  );
};

export default Kitchen;
