import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    width: 100%;
    padding: 10px;
    height: 6%;
    background-color: #0AA7E2;
    border: 2px solid  #0AA7E2;
    border-radius: 30px;
    color: #FFF;  
    font-size: 18px;
    font-family: 'Inter', sans-serif;
    margin: 38px 0 12px 0;
`;

function ButtonLogin(props) {
    return (
    <Button>{props.text}</Button>
    );
};

export default ButtonLogin;