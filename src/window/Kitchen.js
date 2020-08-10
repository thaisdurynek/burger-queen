import React from 'react';
import { withRouter } from 'react-router-dom';
import firebase from '../configs/FirebaseConfig.js';

const Kitchen = () => {

  const filtro = firebase.firestore().collection('Orders').where("stats", "==", "Encaminhado para a cozinha").get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        const acessOrder = doc.data().order;
        const mesa = doc.data().table
        const order = acessOrder[0];
        const iten = order.item;
        const extra = order.extra;
        const info = order.info;

        if (extra !== undefined || info !== undefined) {
          console.log("EXTRA =>", extra, "INFO =>", info, "MESA =>", mesa)
        } else {
          console.log("MESA =>", mesa, "ITEM =>", iten)
        }
      });
    })

  return (
    <>
      <h4>Hello</h4>
    </>
  );
};

export default withRouter(Kitchen);