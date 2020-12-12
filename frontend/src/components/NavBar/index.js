import React from 'react';

import { Logo, NavigationBar, NavList, NavListOption } from './styles';

import logo from '../../assets/img/logo.png'

export default function NavBar() {
    return (
        <NavigationBar>
            <Logo src={logo} alt="Logo da empresa Vxtel"/>
            <NavList>
                <NavListOption href="/">Home</NavListOption>
                <NavListOption href="/sobre">Sobre</NavListOption>
                <NavListOption href="/calculadora">Calculadora</NavListOption>
            </NavList>
        </NavigationBar>
    )    
}