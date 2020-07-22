import React from 'react';
import Input from '../components/Input.js';
import styled from 'styled-components';
import image from '../assets/background 01.jpg';
import logo from '../assets/logo.png';

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
      <Forms>
        <h1>Login</h1>
        <Input type='email' placeholder='Email'/>
        <Input type='password' placeholder='Password'/>
      </Forms>
    </Div>
  )
}

export default Login;
