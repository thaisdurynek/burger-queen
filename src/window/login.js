import React from 'react';
import styled from 'styled-components';
import Input from '../components/auth/Input.js';
import Button from '../components/auth/Button.js';
import Title from '../components/auth/Title.js';
import Error from '../components/auth/Error.js';
import Link from '../components/auth/Link.js';
import Background from '../components/auth/Background.js';
//import { injectGlobal } from 'styled-components';

const Div = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
`;

const Main = styled.main`
  flex-grow: 1;
  padding: 0% 10%;
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const Forms = styled.form`
  display: flex;
  flex-direction: column;
`;

const Login = () => {
  return (
    <Div>
      <Background />
      <Main>
        <Title text="Login" />
        <Forms>
          <Input type='email' placeholder='Email' />
          <Input type='password' placeholder='Senha' />
        </Forms>
        <Error />
        <Button text="Login" />
        <Link text="Não possui cadastro? " link="Registre-se" />
      </Main>
    </Div>
  );
};

export default Login;
