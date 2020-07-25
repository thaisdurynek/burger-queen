import React from 'react';
import Register from './window/Register.js';
import Login from './window/Login.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//import firebase from './firebaseConfig.js';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={Login} />
        <Route path="/Register" render={Register} />
        <Route path="/Login" render={Login} />
        {/* <Route path="/salao" render={Salao} />
        <Route path="/cozinha" render={Cozinha} /> */}
      </Switch>
    </BrowserRouter>
  );
};
export default App;
