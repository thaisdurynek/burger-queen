import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
`;

const ContainerNotesOrder = (props) => {
    return (
        <Container>{props.children}</Container>
    );
};

export default ContainerNotesOrder;