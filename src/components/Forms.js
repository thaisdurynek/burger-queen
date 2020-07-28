import React from 'react';
import styled from 'styled-components';

const Forms = styled.form`
  display: flex;
  flex-direction: column;
`;

function Form(props) {
  return (
    <Forms>{props.children}</Forms>
  );
};

export default Form;