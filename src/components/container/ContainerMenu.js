import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: #F6F6F6;
    padding: 30px;
`;

const MenuContainer = (props) => {
    return (
        <Container>{props.children}</Container>
    );
};

export default MenuContainer;