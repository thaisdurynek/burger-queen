import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import firebase from '../configs/FirebaseConfig.js';
import styled from 'styled-components';
import Container from '../components/container/ContainerMenu.js';
import Err from '../components/Alert.js';
import Note from '../components/TextArea.js';
import Text from '../components/Text.js';
import Button from '../components/Button.js';
import ResumeOrder from '../components/ResumeOrder.js';
import Menu from '../components/Menu.js';
import Faixa from '../assets/faixa.png';
import Background from '../assets/background02.png';
import Item from '../components/OrderItem.js';
import SignOut from '../configs/FirebaseSignOut';
import Modal from '../components/Modal';

const Img = styled.img`
  width: 80%;
  margin: 26px 0;
`;

const Saloon = (props) => {
  const [menu, setMenu] = useState([]);
  const [order, setOrder] = useState([]);
  const [finalOrder, setFinalOrder] = useState({});
  const [typeOrder, setTypeOrder] = useState("lunch");
  const [alert, setAlert] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [burger, setBurger] = useState({});
  const [burgerInfo, setBurgerInfo] = useState('');
  const [extra, setExtra] = useState('')
  const [err, setErr] = useState('');

  useEffect(() => {
    firebase.firestore().collection('Menu').onSnapshot((snapshot) => {
      const newMenu = snapshot.docs.map((doc) => ({ ...doc.data() }))
      setMenu(newMenu)
    })
  }, [menu, order, finalOrder, burgerInfo, burger, extra])

  useEffect(() => {
    const timer = setTimeout(() => { setAlert('') }, 4000);
    return () => clearTimeout(timer);
  }, [alert, err]);

  const logout = (event) => {
    event.preventDefault();
    SignOut(props);
  }

  const clickMenuItem = (e, price, item) => {
    e.preventDefault();
    if(item.slice(0, 10) === 'Hamburguer'){
      setModalIsOpen(true)
      setBurger({price, item})
    } else{
      setOrder([...order, { price, item }]);
    }
  }

  const burgerOrder = (e) => {
    e.preventDefault();
    let price = burger.price;
    if(extra !== '') {
      price = burger.price + 1;
    }
    setOrder([...order, { 
      price: price, 
      item: burger.item, 
      info: `Info: ${burgerInfo}`,
      extra: `Extra: ${extra}`
    }]);
    setModalIsOpen(false);
    setBurgerInfo('');
    setExtra('');
  }

  const sendOrder = (e) => {
    e.preventDefault();
    const nameOrder = finalOrder.name;
    const tableOrder = finalOrder.table;
    if (nameOrder === undefined || tableOrder === undefined) {
      setErr("Preencha o nº da mesa e o nome do cliente!")
    } else if (order.length === 0) {
      setErr("Sua comanda esta vazia. Adicione itens!")
    } else {
      const user = firebase.auth().currentUser.email;
      firebase.firestore().collection('Orders').doc().set({
        table: finalOrder.table,
        name: finalOrder.name,
        order: order,
        observation: finalOrder.obs ? finalOrder.obs : '',
        price: total(order),
        stats: "Encaminhado para a cozinha",
        worker: user,
        date: new Date(),
      })
        .then(() => {
          setOrder([]);
          setAlert("Pedido enviado para a cozinha!");
        });
    };
  };

  const deleteItem = (e, key) => {
    e.preventDefault();
    order.splice(key, 1);
  }

  const total = (arr) => {
    const sum = arr.reduce((init, item) => init + item.price, 0);
    return sum;
  }

  const filterBreakfast = menu.filter((breakfast) => {
    return breakfast.type === "Café da Manhã";
  });
  const filterLunch = menu.filter((lunch) => {
    return lunch.type === "Menu Principal";
  });

  const filterMenu = (e, type) => {
    e.preventDefault();
    setTypeOrder(type);
  };

  return (
    <Container direction="row" height="100vh">
      <Container direction="column" width="70%" aling="center" background={Background} >
        <Container direction='row' justify='space-around' >
          <Img src={Faixa} />
        </Container>
        <Container direction="row" justify="center" >
          <Button onClick={(e) => filterMenu(e, "breakfast")} text="Café da Manhã" color="white" background="#0AA7E2" height="86%" width="34%" font="22px" />
          <Button onClick={(e) => filterMenu(e, "lunch")} text="Menu Principal" color="white" background="#0AA7E2" height="86%" width="34%" font="22px" />
        </Container>
        <Container direction="row" wrap="wrap" justify="center" padding="14px 0 0 0" margin="28px 0">
          {typeOrder === "breakfast" ? filterBreakfast.map(elem => (
            <Menu
              key={elem.item}
              img={elem.img}
              alt={elem.item}
              title={elem.item}
              price={`${elem.price} R$`}
              onClick={(event) => clickMenuItem(event, elem.price, elem.item)}
            />
          )) : filterLunch.map(elem => (
            <Menu
              key={elem.item}
              img={elem.img}
              alt={elem.item}
              title={elem.item}
              price={`R$ ${elem.price}`}
              onClick={(event) => clickMenuItem(event, elem.price, elem.item)}
            />
          ))}
        </Container>
        {modalIsOpen ? 
        (
        <Modal 
        onClose={() => setModalIsOpen(false)} 
        onChangeBurger={(e) => setBurgerInfo(e.target.value)}
        onChangeExtra={(e) => setExtra(e.target.value)}
        onClick={burgerOrder}
        />
        ) : null}
      </Container>
      <Container direction="column" height="100%" width="36%" >
        <ResumeOrder>
          <Container width="100%" justify="flex-end">
            <Button text='Sair' color='white' background='#0AA7E2' width="24%" height="76%" margin="0" onClick={logout} />
          </Container>
          <Container direction="column" margin="4% 0 8% 0">
            <Container direction="row" justify="flex-start" width="100% " margin="10px 0 0 0">
              <Text size="26px" margin="4px" text="Mesa:" />
              <Note onChange={(e) => setFinalOrder({ ...finalOrder, table: e.target.value })}
                width='40%'
                height='36px'
                required
              />
            </Container>
            <Container direction="row" justify="flex-start">
              <Text size="26px" margin="4px" text="Nome:" />
              <Note onChange={(e) => setFinalOrder({ ...finalOrder, name: e.target.value })}
                width="40%"
                height="36px"
                required
              />
            </Container>
          </Container>
          <Container direction="row" justify="center">
            <Text size="28px" text="Resumo do Pedido" margin="0" />
          </Container>
          <Container direction="column" align="center" overflow="scroll" height="242px" width="95%" margin="10px 0 24px 0">
            <hr width="90%" />
            {order.map((i, index) => (
              <Item key={index}
                title={i.item}
                price={`R$ ${i.price}`}
                info={i.info}
                extra={i.extra}
                onClick={(event) => deleteItem(event, index)} />
            ))}
          </Container>
          <Container direction="column" justify="flex-end" align="center">
            <hr width="90%" />
            <Note onChange={(e) => setFinalOrder({ ...finalOrder, obs: e.target.value })}
              margin="18px 0 0 0"
              width="88%"
              height="66px"
              placeholder="Observações"
            />
            {alert.length ? <Text margin="8px 0 0 0" size="18px" text={alert} /> : null}
            {err.length ? <Err text={err} /> : null}
            <Button onClick={sendOrder} text={`Concluir R$ ${total(order)}`} width="88%" height="52px" margin="18px 0" />
          </Container>
        </ResumeOrder>
      </Container>
    </Container >
  );
};

export default withRouter(Saloon);







