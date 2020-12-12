import React from 'react';

import { FooterContainer, Logo } from './styles';

import logo from '../../assets/img/logo.png';

export default function Footer() {
    return (
        <FooterContainer>
            <Logo src={logo}/>
        </FooterContainer>
    )
}