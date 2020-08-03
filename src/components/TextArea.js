import React from 'react';
import styled from 'styled-components';

const Identificacion = styled.textarea`
  width: ${props => props.width || "30%"};
  height: ${props => props.height || "30%"};
	border: 2px solid gray;
  border-radius:10px;
  font-size: 18px;
  margin: 4px;
`;

function IdentificationTable(props) {
  return (
    <Identificacion 
    width={props.width}
    placeholder={props.placeholder}/>
  );
};

export default IdentificationTable;