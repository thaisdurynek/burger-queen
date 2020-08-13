
import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import firebase from '../configs/FirebaseConfig.js';
import SignOut from '../configs/FirebaseSignOut';
import Container from '../components/container/ContainerMenu.js';
import Button from '../components/Button.js';

const Kitchen = (props) => {

  const [order, setOrder] = useState([]);

  useEffect(() => {
    async function fireCall() {
      await firebase.firestore().collection('Orders').where("status", "==", "Encaminhado para a cozinha").onSnapshot((snapshot) => {
        const newOrder = snapshot.docs.map((doc) => ({ ...doc.data() }));
        setOrder(newOrder);
      });
    };
    fireCall();
  }, []);

  const resumeOrder = (order) => {
    let orderInfo = [];

    for (let itens in order) {
      const orders = order[itens].item;
      const extra = order[itens].extra;
      const info = order[itens].info;

      orderInfo.push(
        <Container direction="column">
          <h3>{orders}</h3>
          {info ? <p>Tipo de Hamburger: {info}</p> : null}
          {extra ? <p>Adicionais: {extra}</p> : null}
        </Container>
      );
    };
    return orderInfo;
  };

  const logout = (event) => {
    event.preventDefault();
    SignOut(props);
  }

  return (
    <Container direction="column">
      <Container justify="space-around">
        <Link to="/Historic">Histórico</Link>
        <Button onClick={logout} text="Sair" width="14%" height="46px" />
      </Container>
      <Container direction="column">
        {order.map((request) => (
          <Container justify="space-around" color="gray" margin="20px 0">
            <Container direction="column">
              {resumeOrder(request.order)}
              {request.observation ? <p>Observações: {request.observation}</p> : null}
            </Container>
            <Container direction="column">
              <h4>{request.table}</h4>
              <h4>{request.name}</h4>
              <h4>{request.worker}</h4>
              <Button text="Concluir Pedido" />
            </Container>
          </Container>
        ))}
      </Container>

    </Container>
  );
};

export default withRouter(Kitchen);
