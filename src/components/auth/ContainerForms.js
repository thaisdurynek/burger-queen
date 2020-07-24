import React from 'react';
import styled from 'styled-components';

const Radio = styled.div`
	color: gray;
	margin-bottom: 10px;
  font-family: 'Inter', sans-serif;
	div {
		display: flex;
		justify-content: space-evenly;
		margin: 12px;
    @media (min-width: 320px) and (max-width: 500px) {
      display: flex;
      justify-content: space-between;
  }
	}
`;

function ContainerForms(props) {
    return (
        <Radio>{props.children}</Radio>
    );
};

export default ContainerForms;