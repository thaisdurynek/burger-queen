import React from 'react';
import styled from 'styled-components';
import Button from './components/Button.js'

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

function App() {
  return (
    <Container>
      <Button text="Login"></Button>
    </Container>
  );
};

export default App;
