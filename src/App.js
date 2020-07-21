import React from 'react';
import image from './assets/background 01.jpg';
import styled from 'styled-components';
import Button from './components/Button.js'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("${image}");
  background-size: contain;
  background-repeat: no-repeat;

`
function App() {
  return (
    <>
    <Container>
      <Button></Button>
    </Container>
    </>
  );
};

export default App;
