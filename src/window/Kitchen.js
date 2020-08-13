
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import firebase from '../configs/FirebaseConfig.js';

const Kitchen = () => {

  const [order, setOrder] = useState([]);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    firebase.firestore().collection('Orders').where("status", "==", "Encaminhado para a cozinha").onSnapshot((snapshot) => {
      const newInfo = snapshot.docs.map((doc) => ({ ...doc.data() }));
      setInfo(newInfo);
      // console.log(newInfo[0].table)
      const newOrder = snapshot.docs.map((doc) => ({ ...doc.data().order }));
      setOrder(newOrder);
    });
  }, []);

  const resumeOrder = (order) => {
    let itens = [];
    for (const element in order) {
      const item = order[element].item;
      const extra = order[element].extra;
      const info = order[element].info;
      itens.push(<div>
        <h3>{item}</h3>
        {extra ? <p>Extra: {extra}</p> : null}
        {info ? <p>Info: {info}</p> : null}
      </div>);
    };
    return itens;
  };

  // const infoGeneral = (info) => {
  //   // let information = [];
  //   for (const element in info) {
  //     const table = info[element].table;
  //     const name = info[element].name;
  //     const worker = info[element].worker;
  //     console.log(table, name, worker)
  //     // information.push()
  //   }
  // }

  return (
    <>
      {order.map((elem) => (
        resumeOrder(elem)
      ))}
      {/* {info.map((elem) => (
        infoGeneral(elem)
      ))} */}
    </>
  );
};

export default withRouter(Kitchen);
