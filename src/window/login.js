import React from 'react';
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

const Login = () => {
  return (
    <Container>
      <Background />
      <Main>
        <Title text="Login" />
        <Forms>
          <Input type='email' placeholder='Email' />
          <Input type='password' placeholder='Senha' />
        </Forms>
        <Error />
        <Button text="Login" />
        <Redirection text="Funcionário novo? ">
          <Link to="/Register">Cadastre-se</Link>
        </Redirection>
      </Main>
    </Container>
  );
};

export default withRouter(Login);
