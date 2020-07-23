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

const Radio = styled.div`
	color: gray;
	margin-bottom: 20px;
	div {
		display: flex;
		justify-content: space-evenly;
	}
`;

const Register = () => {
	return (
		<Div>
			<Background />
			<Main>
				<Title text="REGISTRO" />
				<Forms>
					<Input type='text' placeholder='Nome' />
					<Input type='email' placeholder='Email' />
					<Radio>
						<p>Cargo:</p>
						<div>
							<Input type='radio' value='atendimento' name='cargo'/>
							<Input type='radio' value='cozinha' name='cargo'/>
						</div>
					</Radio>
					<Input type='password' placeholder='Senha' />
					<Input type='password' placeholder='Confirme sua senha' />
				</Forms>
				<Error />
				<Button text="Registrar-se" />
				<Link text="Já possui cadastro? " link="Faça Login" />
			</Main>
		</Div>
	);
};

export default Register;