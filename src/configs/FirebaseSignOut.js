import firebase from './FirebaseConfig';

const logout = (props) => {
  firebase.auth().signOut().then(() => {
    props.history.push('./Login')
  }).catch(function(error) {
    alert(`Usuário não deslogado: ${error}`)
  });
}

export default logout;