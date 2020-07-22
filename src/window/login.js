import React from 'react';
import Input from '../components/Input.js';
import styled from 'styled-components';
import image from '../assets/background 01.jpg';
import logo from '../assets/logo.png';
import Button from '../components/Button.js';
import Title from '../components/Title.js';
import Error from '../components/Error.js';
import Link from '../components/Link.js';

const Div = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
`;

const Forms = styled.form`
  flex-grow: 1;
  padding: 0% 10%;
  display: flex;
  flex-direction: column;
  align-content: center;
  h1 {
    text-align: center;
  }
`;

const Logo = styled.div`
  flex-grow: 1;
  height: 100vh;
  background-image: url("${image}");
  background-size: cover;
  background-repeat: no-repeat;
  img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
  }
`;

const Login = () => {
  return (
    <Div>
      <Logo>
        <img src={logo} alt='logo'></img>
      </Logo>
      <Title text="LOGIN"/>
      <Forms>
        <Input type='email' placeholder='Email' />
        <Input type='password' placeholder='Password' />
      </Forms>
      <Error err="Erro" />
      <Button text="Login" />

      <Link text="Não possui cadastro? " link="Registro" />
    </Div>
  )
}

export default Login;
