import React, { useState } from 'react';
import { Link, withRouter, useHistory } from 'react-router-dom';
import Input from '../components/auth/Input.js';
import Button from '../components/auth/Button.js';
import Title from '../components/auth/Title.js';
import Error from '../components/auth/Error.js';
import Redirection from '../components/auth/Link.js';
import Background from '../components/auth/Background.js';
import Container from '../components/auth/Container.js';
import Main from '../components/auth/Main.js';
import Forms from '../components/auth/Forms.js';
import Radio from '../components/auth/ContainerForms.js';
import firebase from '../firebaseConfig.js';
//import authStage from '../FirebaseAuth.js';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const history = useHistory();

  const signUp = (event) => {
    event.preventDefault();
    const userObj = {name: name, email: email, role: role};
    console.log(userObj);
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then( () => {
        if(role === ' Atendimento'){
          history.push('/salao')
        } else {
          history.push('/cozinha')
        }
      }
    )
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log( errorCode, errorMessage);
      // ...
    });
  }

  return (
    <Container>
      <Background />
      <Main>
        <Title text="Registro" />
        <Forms>
          <Input onChange={(e) => setName(e.target.value)} type='text' placeholder='Nome' />
          <Input onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' />
          <Radio>
            <p>Cargo:</p>
            <div>
              <Input onChange={(e) => setRole(e.target.value)} type='radio' value=' Atendimento' name='cargo' />
              <Input onChange={(e) => setRole(e.target.value)} type='radio' value=' Cozinha' name='cargo' />
            </div>
          </Radio>
          <Input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Senha' />
          <Input onChange={(e) => setPasswordConfirm(e.target.value)} type='password' placeholder='Confirme sua senha' />
        </Forms>
        <Error />
        <Button onClick={signUp} text="Registrar-se" />
        <Redirection text="Já possui cadastro? ">
          <Link to="/Login">Faça Login</Link>
        </Redirection>
      </Main>
    </ Container>
  );
};

export default withRouter(Register);