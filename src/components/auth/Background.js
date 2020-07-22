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
  }
`;

const Background = () => {
  return (
    <Logo>
      <img src={logo} alt='logo'></img>
    </Logo>
  )
}

export default Background;
