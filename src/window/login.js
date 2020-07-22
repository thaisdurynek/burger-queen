import React from 'react';
import Input from '../components/auth/Input.js';
import styled from 'styled-components';
import Button from '../components/auth/Button.js'
import Background from '../components/auth/Background.js';
//import { injectGlobal } from 'styled-components';

const Div = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
`;

const Log = styled.div`
  flex-grow: 1;
  padding: 0% 10%;
  display: flex;
  flex-direction: column;
  align-content: center;
  h1 {
    text-align: center;
  }
`;

const Forms = styled.form`
  display: flex;
  flex-direction: column;
`;

const Login = () => {
  return (
    <Div>
      <Background></Background>
      <Log>
        <Forms>
          <h1>Login</h1>
          <Input type='email' placeholder='Email'/>
          <Input type='password' placeholder='Password'/>
          <Button text="Login"></Button>
        </Forms>
      </Log>
    </Div>
  )
}

export default Login;
