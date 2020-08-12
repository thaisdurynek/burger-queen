import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import firebase from '../configs/FirebaseConfig.js';
// import Banner from '../components/KitchenOrders.js';

const Kitchen = () => {

  const [item, setItem] = useState({});

  useEffect(() => {
    firebase.firestore().collection('Orders').where("stats", "==", "Encaminhado para a cozinha").get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          const acessOrder = doc.data().order;
          // const mesa = doc.data().table;
          // const name = doc.data().name;
          // const worker = doc.data().worker;

          for (const element of acessOrder) {
            const item = element.item;
            const extra = element.extra;
            const info = element.info;
            if (extra !== undefined || info !== undefined) {
              setItem({ item, extra, info });
            } else {
              setItem({ item });
            };
          };
        });
      });
  }, []);

  return (
    <>
      {/* {item.map(() => (
        <Banner
          item={item} />
      ))} */}
    </>
  );
};

export default withRouter(Kitchen);
