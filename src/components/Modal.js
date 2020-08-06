import React from 'react';
import Input from './Input';
import Container from './container/ContainerMenu';
import Button from './Button';

const Modal = (props) => {
    return (
    <Container direction='column'>
        <Container direction='row'>
            <Input type='radio' value='bovino' name='hamburger'/>
            <Input type='radio' value='frango' name='hamburger'/>
            <Input type='radio' value='vegano' name='hamburger'/>
        </Container>
        <Button onClick={props.onClick} />
    </Container>
    )
}

export default Modal;