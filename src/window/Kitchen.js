
import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import firebase from '../configs/FirebaseConfig.js';
import SignOut from '../configs/FirebaseSignOut';
import Container from '../components/container/ContainerMenu.js';
import Button from '../components/Button.js';
//import Check from '../assets/check.png';
import Links from '../components/Link';

// const Checked = styled.img`
//   margin: 30px 0 0 0;
//   width: 70px;
// `;

const Kitchen = (props) => {

  const [order, setOrder] = useState([]);

  useEffect(() => {
    async function fireCall() {
      await firebase.firestore().collection('Orders').where("status", "==", "Encaminhado para a cozinha").onSnapshot((snapshot) => {
        const newOrder = snapshot.docs.map((doc) => {
          if (doc.data().status === 'Encaminhado para a cozinha') {
            return ({
              id: doc.id,
              ...doc.data()
            });
          } else {
            return false
          };
        });
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

  const updateOrder = (e, key) => {
    e.preventDefault();
    firebase.firestore().collection('Orders').doc(key)
      .update({ status: "Encaminhado para o salão" });
  };

  return (
    <Container direction="column" color="#E8E8E8">
      <Container justify="space-around" align='baseline' color="#E8E8E8">
        <Links font='40px'><Link to="/Historic">Histórico de Pedidos</Link></Links>
        <Button onClick={logout} text="Sair" width="14%" height="" />
      </Container>
      <Container direction="column" color="#E8E8E8">
        {order.map((request) => (
          <Container
            key={request.id}
            justify="space-between" 
            color="white" 
            margin="3%" 
            mediaMargin='3%' 
            mediaAlign='center' 
            maxMargin='3% 20%' 
            padding="40px 20px 40px 40px" 
            radius="15px">
            <Container direction="column" mediaAlign='center' justify='center' align="flex-start" font='18px'>
              {resumeOrder(request.order)}
              {request.observation ? <p>Observações: {request.observation}</p> : null}
            </Container>
            <Container direction="column" justify='center' align='center' width='300px'>
              <h4>Mesa: {request.table}</h4>
              <h4>Cliente: {request.name}</h4>
              <h4>Funcionário: {request.worker}</h4>
              <Button 
                margin='30px 0 0 0' 
                width='200px' 
                text="Concluir Pedido"
                onClick={(e) => updateOrder(e, request.id)} />
              {/* <Checked src={Check} alt="Check"/> */}
            </Container>
          </Container>
        ))}
      </Container>

    </Container>
  );
};

export default withRouter(Kitchen);
