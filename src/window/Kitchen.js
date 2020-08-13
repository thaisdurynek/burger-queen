
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import firebase from '../configs/FirebaseConfig.js';
import Container from '../components/container/ContainerMenu.js';

const Kitchen = () => {

  const [order, setOrder] = useState([]);
  // const [info, setInfo] = useState([]);

  useEffect(() => {
    async function fireCall() {
      await firebase.firestore().collection('Orders').where("status", "==", "Encaminhado para a cozinha").onSnapshot((snapshot) => {
        const newOrder = snapshot.docs.map((doc) => ({ ...doc.data() }));
        setOrder(newOrder);
      });
    };
    fireCall();
  }, []);

  const resumeOrder = () => {
    let orderInfo = [];
    for (let element of order) {
      const name = element.name;
      const table = element.table;
      const worker = element.worker;
      const obs = element.observation;
      orderInfo.push(<Container direction="column">
        <h4>{table}</h4>
        <h4>{name}</h4>
        {obs ? <p>Observações: {obs}</p> : null}
        <h4>{worker}</h4>
      </Container>);

      const resume = element.order;
      for (let itens of resume) {
        const orders = itens.item;
        const extra = itens.extra;
        const info = itens.info;
        orderInfo.push(<Container direction="column">
          <h3>{orders}</h3>
          {info ? <p>Tipo de Hamburger: {info}</p> : null}
          {extra ? <p>Adicionais: {extra}</p> : null}
        </Container>);
      };
      return (<Container justify="column">
        {orderInfo}
      </Container>);
    };
  };

  return (
    <Container direction="column">
      <Container direction="column">
        {resumeOrder()}
      </Container>
    </Container>
  );
};

export default withRouter(Kitchen);
