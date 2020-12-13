import React from 'react';
import { NavBar, Form } from '../../components/index';
import { Container } from './styles';

export default function Calculator() {
    return (
        <React.Fragment>
            <Container>
                <NavBar />
                <Form />
            </Container>
        </React.Fragment>
    )
}