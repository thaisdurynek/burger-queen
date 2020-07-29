import React from 'react';
import Logo from '../components/Logo.js';
//import Menu from '../components/Menu.js';
import MenuContainer from '../components/container/ContainerMenu.js';
import OptionsButton from '../components/OptionsButton.js';
//import firebase from '../configs/FirebaseConfig.js';

const Kitchen = () => {
  //const [changeMenu, setChangeMenu] = useState('');
  const optionArray = (event) => {
    event.preventDefault();
  }
  console.log(optionArray);

    return (
      <>
        <Logo text='Burger Queen'/>
        <OptionsButton onClick={optionArray} text='Café da Manhã' />
        <OptionsButton text='Menu Principal' />
        <MenuContainer>
          {/* {Data.map(elem => (
            <Menu
            img={elem.img} 
            title={elem.item} 
            price={`${elem.price} R$`}
             />
          ))} */}
        </MenuContainer>
      </>
    );
  };
  
  export default Kitchen;
  