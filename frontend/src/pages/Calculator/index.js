import React from 'react';
import { NavBar, Form, Footer } from '../../components/index';
import { Container } from './styles';

export default function Calculator() {
    return (
        <React.Fragment>
            <Container>
                <NavBar />
                <Form />
                <Footer />
            </Container>
        </React.Fragment>
    )
}