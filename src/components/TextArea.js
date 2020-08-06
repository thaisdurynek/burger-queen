import React from 'react';
import styled from 'styled-components';

const Identification = styled.textarea`
  width: ${props => props.width || "30%"};
  height: ${props => props.height || "30%"};
	border: 2px solid gray;
  border-radius:10px;
  font-size: 18px;
  margin: ${props => props.margin || "4px"};
`;

function IdentificationTable(props) {
  return (
    <Identification
      width={props.width}
      height={props.height}
      placeholder={props.placeholder}
      margin={props.margin}
      onChange={props.onChange}
    />
  );
};

export default IdentificationTable;