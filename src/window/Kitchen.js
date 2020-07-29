import React from 'react';
import Logo from '../components/Logo.js';
import Menu from '../components/Menu.js';
import MenuContainer from '../components/container/ContainerMenu.js';
import Data from '../components/MenuData.js';
import OptionsButton from '../components/OptionsButton.js';



const Kitchen = () => {
  //const [changeMenu, setChangeMenu] = useState('');
  const optionArray = (option) => {
      Data.filter(elem => (elem.type === option));
      console.log(Data);
  }
  console.log(optionArray);

    return (
      <>
        <Logo text='Burger Queen'/>
        <OptionsButton onClick={optionArray('Café da Manhã')} text='Café da Manhã' />
        <OptionsButton onClick={optionArray('Principal')} text='Menu Principal' />
        <MenuContainer>
          {Data.map(elem => (
            <Menu
            img={elem.img} 
            title={elem.item} 
            price={`${elem.price} R$`}
             />
          ))}
        </MenuContainer>
      </>
    );
  };
  
  export default Kitchen;
  