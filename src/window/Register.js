import { Link, withRouter } from 'react-router-dom';
import React, { useState } from 'react';
import Input from '../components/Input.js';
import Button from '../components/Button.js';
import Text from '../components/Text.js';
import Error from '../components/Error.js';
import Redirection from '../components/Link.js';
import Background from '../components/Background.js';
import Container from '../components/container/ContainerLogo.js';
import Main from '../components/Main.js';
import Forms from '../components/Forms.js';
import Radio from '../components/container/ContainerForms.js';
import firebase from '../configs/FirebaseConfig.js';
import verification from '../configs/FirebaseAuth.js';
import errorFirebase from '../configs/FirebaseErrors.js';

const Register = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [err, setErr] = useState('');

  const signUp = (event) => {
    if (role === "" || password !== passwordConfirm) {
      setErr("Por favor, preencha seu cargo ou verifique se suas senhas são iguais")
    } else {
      event.preventDefault();
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
          const user = firebase.auth().currentUser.uid;
          firebase.firestore().collection('usuario').doc(user).set({
            name: name,
            email: email,
            role: role,
            password: password,
            passwordConfirm: passwordConfirm
          });
        })
        .then(() => {
          verification(props);
        }).catch(function (error) {
          let err = error.code;
          if (errorFirebase[err]) {
            setErr(errorFirebase[err]);
          } else {
            setErr(err);
          };
        });
    };
  };

  return (
    <Container>
      <Background />
      <Main>
        <Text text="Registro"  size="52px"/>
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
        {err.length ? <Error text={err} /> : null}
        <Button onClick={signUp} text="Registrar-se" />
        <Redirection text="Já possui cadastro? ">
          <Link to="/Login">Faça Login</Link>
        </Redirection>
      </Main>
    </ Container>
  );
};

export default withRouter(Register);