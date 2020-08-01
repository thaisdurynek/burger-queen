import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Logo from '../components/Logo.js';
import Menu from '../components/Menu.js';
import MenuContainer from '../components/container/ContainerMenu.js';
import OptionsButton from '../components/OptionsButton.js';
import firebase from '../configs/FirebaseConfig.js';

const Kitchen = () => {
  const [menu, setMenu] = useState([]);

  useEffect(()=>{
    firebase.firestore().collection('Menu').onSnapshot((snapshot) => {
      const newMenu = snapshot.docs.map((doc) => ({...doc.data()}))
      setMenu(newMenu)
    })
  }, [])

    return (
      <>
        <Logo text='Burger Queen'/>
        <OptionsButton text='Café da Manhã' />
        <OptionsButton text='Menu Principal' />
        <MenuContainer>
          {menu.map(elem => (
            <Menu
            img={elem.img}
            alt={elem.item} 
            title={elem.item} 
            price={`${elem.price} R$`}
             />
          ))}
        </MenuContainer>
      </>
    );
  };
  
  export default withRouter(Kitchen);
  