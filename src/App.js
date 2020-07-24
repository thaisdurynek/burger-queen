import React from 'react';
import Register from './window/Register';
//import Login from './window/Login.js';
import firebase from './firebaseConfig.js'

const auth = firebase.auth;
console.log(auth);

function App() {
  return (
    <Register />
  );
};
export default App;
