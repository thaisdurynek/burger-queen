import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: space-around;
`;

const SaloonContainer = (props) => {
    return (
        <Container>{props.children}</Container>
    );
};

export default SaloonContainer;