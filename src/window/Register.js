import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
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

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [saloon, setSaloon] = useState('');
  const [kitchen, setKitchen] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const signUp = (event) => {
    event.preventDefault();
    console.log(name, email, password, saloon, kitchen, passwordConfirm);
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
              <Input onChange={(e) => setSaloon(e.target.value)} type='radio' value='Atendimento' name='cargo' />
              <Input onChange={(e) => setKitchen(e.target.value)} type='radio' value='Cozinha' name='cargo' />
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