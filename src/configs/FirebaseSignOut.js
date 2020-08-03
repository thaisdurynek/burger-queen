import firebase from './FirebaseConfig';

const logout = (props) => {
  firebase.auth().signOut().then(() => {
    console.log('usuário deslogou')
    props.history.push('./Login')
  }).catch(function(error) {
    console.log(error)
  });
}

export default logout;