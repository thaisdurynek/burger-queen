import React from 'react';
import styled from 'styled-components';

const Identification = styled.input`
  width: ${props => props.width || "30%"};
  height: ${props => props.height || "30%"};
	border: 2px solid gray;
  border-radius:10px;
  font-size: 18px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  margin: ${props => props.margin || "4px"};
  @media (min-width: 320px) and (max-width: 500px){
    height: ${props => props.mediaHeight || "35px"};
  }
`;

function IdentificationTable(props) {
  return (
    <Identification
      value={props.value}
      width={props.width}
      height={props.height}
      mediaHeight={props.mediaHeight}
      placeholder={props.placeholder}
      margin={props.margin}
      onChange={props.onChange}
    />
  );
};

export default IdentificationTable;