import React, { useState} from 'react';
import Input from '../components/auth/Input.js';
import Button from '../components/auth/Button.js';
import Title from '../components/auth/Title.js';
import Error from '../components/auth/Error.js';
import Link from '../components/auth/Link.js';
import Background from '../components/auth/Background.js';
import Container from '../components/auth/Container.js';
import Main from '../components/auth/Main.js';
import Forms from '../components/auth/Forms.js';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signIn = (event) => {
    event.preventDefault();
    console.log(email, password);
  };
  return (
    <Container>
      <Background />
      <Main>
        <Title text="Login" />
        <Forms onSubmit>
          <Input onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' />
          <Input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Senha' />
          <Error />
          <Button onClick={signIn} text="Login" />
        </Forms>
        <Link text="Não possui cadastro? " link="Registre-se" />
      </Main>
    </Container>
  );
};

export default Login;
