import firebase from './firebaseConfig';

const verification = (props) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const uid = firebase.auth().currentUser.uid;
      firebase.firestore().collection('usuario').doc(uid).get()
        .then((doc) => (doc.data().role))
        .then((role) => {
          if (role === ' Atendimento') {
            props.history.push('./Saloon')
          } else {
            props.history.push('./Kitchen')
          };
        });
    };
  });
};

export default verification;