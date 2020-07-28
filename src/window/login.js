import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Input from '../components/Input.js';
import Button from '../components/Button.js';
import Title from '../components/Title.js';
import Error from '../components/Error.js';
import Redirection from '../components/Link.js';
import Background from '../components/Background.js';
import Container from '../components/Container.js';
import Main from '../components/Main.js';
import Forms from '../components/Forms.js';
import firebase from '../configs/FirebaseConfig.js';
import verification from '../configs/FirebaseAuth.js';
import errorFirebase from '../configs/FirebaseErrors.js';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');

  const signIn = (event) => {
    event.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(verification(props))
      .catch(function (error) {
        let err = error.code;
        if (errorFirebase[err]) {
          setErr(errorFirebase[err]);
        } else {
          setErr(err);
        };
      });
  };

  return (
    <Container>
      <Background />
      <Main>
        <Title text="Login" />
        <Forms onSubmit>
          <Input onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' />
          <Input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Senha' />
        </Forms>
        {err.length ? <Error text={err} /> : null}
        <Button onClick={signIn} text="Login" />
        <Redirection text="Funcionário novo? ">
          <Link to="/Register">Faça Cadastro</Link>
        </Redirection>
      </Main>
    </Container>
  );
};

export default withRouter(Login);
