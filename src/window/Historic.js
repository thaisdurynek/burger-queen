
import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import firebase from '../configs/FirebaseConfig.js';
import Container from '../components/container/ContainerMenu.js';

const Historic = () => {

  const [order, setOrder] = useState([]);

  useEffect(() => {
    async function fireCall() {
      await firebase.firestore().collection('Orders').where("status", "==", "Pedido concluído!").onSnapshot((snapshot) => {
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

  return (
    <Container direction="column">
      <Link to="/Kitchen">Voltar Tela Cozinha</Link>
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
          </Container>
        </Container>
      ))}
    </Container>
  );
};

export default withRouter(Historic);