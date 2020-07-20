import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

var firebaseConfig = {
  apiKey: "AIzaSyBbKvTV4yELx0pTnsaQ0on1lv4meEDcpnc",
  authDomain: "labsap004-burger-queen.firebaseapp.com",
  databaseURL: "https://labsap004-burger-queen.firebaseio.com",
  projectId: "labsap004-burger-queen",
  storageBucket: "labsap004-burger-queen.appspot.com",
  messagingSenderId: "498040402131",
  appId: "1:498040402131:web:96d7f822c828a7b0a3e426",
  measurementId: "G-XH5VRCDMBS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();