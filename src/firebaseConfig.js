import firebase from 'firebase';

let firebaseConfig = {
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