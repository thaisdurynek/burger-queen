import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import firebase from '../configs/FirebaseConfig.js';
import styled from 'styled-components';
import Container from '../components/container/ContainerMenu.js';
import Alert from '../components/Alert.js';
import Note from '../components/TextArea.js';
import Text from '../components/Text.js';
import Button from '../components/Button.js';
import ResumeOrder from '../components/ResumeOrder.js';
import Menu from '../components/Menu.js';
import Faixa from '../assets/faixa.png';
import Background from '../assets/background02.png';
import Item from '../components/OrderItem.js';
import SignOut from '../configs/FirebaseSignOut';

const Img = styled.img`
  width: 80%;
  margin: 26px 0;
`;

const Saloon = (props) => {
  const [menu, setMenu] = useState([]);
  const [order, setOrder] = useState([]);
  const [finalOrder, setFinalOrder] = useState({});
  const [typeOrder, setTypeOrder] = useState("lanch");
  const [alert, setAlert] = useState('');

  useEffect(() => {
    firebase.firestore().collection('Menu').onSnapshot((snapshot) => {
      const newMenu = snapshot.docs.map((doc) => ({ ...doc.data() }))
      setMenu(newMenu)
    })
  }, [menu])

  useEffect(() => {
    const timer = setTimeout(() => { setAlert('') }, 4000);
    return () => clearTimeout(timer);
  }, [alert])

  const logout = (event) => {
    event.preventDefault();
    SignOut(props);
  }

  const clickMenuItem = (e, price, item) => {
    e.preventDefault();
    setOrder([...order, { price, item }]);
  }

  const sendOrder = (e) => {
    e.preventDefault();
    const nameOrder = finalOrder.name;
    const tableOrder = finalOrder.table;
    if (nameOrder === undefined || tableOrder === undefined) {
      setAlert("Preencha o nº da mesa e o nome do cliente!")
    } else if (order.length === 0) {
      setAlert("Sua comanda esta vazia. Adicione itens!")
    } else {
      const user = firebase.auth().currentUser.email;
      firebase.firestore().collection('Orders').doc().set({
        table: finalOrder.table,
        name: finalOrder.name,
        order: order,
        observation: finalOrder.obs,
        price: total(order),
        stats: "Encaminhado para a cozinha",
        worker: user,
        date: new Date(),
      })
        .then(() => {
          // setFinalOrder([]);
          // setOrder([]);
          setAlert("Pedido enviado para a cozinha!")
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

  const filterBreakfeast = menu.filter((breakfeast) => {
    return breakfeast.type === "Café da Manhã";
  });
  const filterLanch = menu.filter((lanch) => {
    return lanch.type === "Menu Principal";
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
          <Button onClick={(e) => filterMenu(e, "breakfeast")} text="Café da Manhã" color="white" background="#0AA7E2" height="86%" width="34%" font="22px" />
          <Button onClick={(e) => filterMenu(e, "lanch")} text="Menu Principal" color="white" background="#0AA7E2" height="86%" width="34%" font="22px" />
        </Container>
        <Container direction="row" wrap="wrap" justify="center" padding="14px 0 0 0" margin="28px 0">
          {typeOrder === "breakfeast" ? filterBreakfeast.map(elem => (
            <Menu
              key={elem.item}
              img={elem.img}
              alt={elem.item}
              title={elem.item}
              price={`${elem.price} R$`}
              onClick={(event) => clickMenuItem(event, elem.price, elem.item)}
            />
          )) : filterLanch.map(elem => (
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
            {alert.length ? <Alert text={alert} /> : null}
            <Button onClick={sendOrder} text={`Concluir R$ ${total(order)}`} width="88%" height="52px" margin="18px 0" />
          </Container>
        </ResumeOrder>
      </Container>
    </Container >
  );
};

export default withRouter(Saloon);







