
import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import firebase from '../configs/FirebaseConfig.js';
import styled from 'styled-components';
import Container from '../components/container/ContainerMenu.js';
import Text from '../components/Text.js';

const Ancora = styled(Link)`
  text-decoration: none;
  color: #fff;
  border: 1.5px solid #0AA7E2;
  background-color: #0AA7E2;
  font-size: 20px;
  border-radius: 30px;
  padding: 10px 12px;
  width: 22%;
  margin: 20px 0 0 32px;
`;

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
    <Container direction="column" color="#E8E8E8" height="100%">
      <Ancora to="/Kitchen">Voltar Tela Cozinha</Ancora>
      {order.map((request) => (
        <Container key={request.id} justify="space-between" color="white" margin="3%" mediaMargin='3%' mediaAlign='center' maxMargin='3% 20%' padding="40px 20px 40px 40px" radius="15px">
          <Container direction="column" mediaAlign='center' justify='center' align="flex-start" font='18px'>
            {resumeOrder(request.order)}
            {request.observation ? <Text color="#FF6347" size="16px" padding="6px 0" margin="0" text={"Observações: "+ request.observation}></Text> : null}
          </Container>
          <Container direction="column" justify='center' align='center' width='340px'>
            <h4>Mesa: {request.table}</h4>
            <h4>Cliente: {request.name}</h4>
            <h4>Funcionário: {request.worker}</h4>
          </Container>
        </Container>
      ))}
    </Container>
  );
};

export default withRouter(Historic);