import React from 'react';
import image from './assets/background 01.jpg'
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  /* background-color:red; */
  background-image: url("${image}");
  background-size: contain;
  background-repeat: no-repeat;

`
function App() {
  return (
    <Container>
      {/* <h1>TESTE</h1> */}
    </Container>
  );
}

export default App;
