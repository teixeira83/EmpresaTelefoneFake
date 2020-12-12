import styled from 'styled-components';
import { COLORS } from '../../assets/css/settings/colors';

export const Logo = styled.img`
    width: 120px;
    height: 50px;
` 

export const NavigationBar = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${COLORS.secondary};
    padding: 5px;
`

export const NavList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const NavListOption = styled.a`
    color: #ffffff;
    margin: 0 5px;
    text-decoration: none;
    transition: 500 linear;
    padding: 15px;

    &:hover {
        border-bottom: 5px solid #ffffff;
    }
`