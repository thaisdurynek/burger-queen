import React from 'react';
import styled from 'styled-components';
import image from '../../assets/background 01.jpg';
import logo from '../../assets/logo.png';

const Logo = styled.div`
  display: flex;
  width: 50%;
  height: 100vh;
  background-image: url("${image}");
  background-size: cover;
  background-repeat: no-repeat;
  align-items: center;
  justify-content: center;
  img {
    width: 82%;
  };
  @media (min-width: 320px) and (max-width: 500px) {
    background-image: none;
    height: 50%;
    img {
      width: 146%;
      margin: 4px 0 0 0;
    };
   };
`;

const Background = () => {
  return (
    <Logo>
      <img src={logo} alt='logo'></img>
    </Logo>
  )
}

export default Background;
