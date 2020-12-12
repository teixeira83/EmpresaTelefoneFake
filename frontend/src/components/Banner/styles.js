import styled from 'styled-components';
import Slider from 'react-slick';
import { COLORS } from '../../assets/css/settings/colors';

export const Logo = styled.img`
    width: 120px;
` 

export const Title = styled.h1`
    color: #ffffff;
    font-size: 38px;
    margin: 180px 80px;
`

export const BannerContainer = styled.div`
    display:flex;
    width: 100vw;
    height: 600px;
    `

export const InformationContainer = styled.div`
    background-color: ${COLORS.secondary};
    width: 100%;
`

export const BannerImage = styled.img`
    height: 600px;
`

export const Carousel = styled(Slider)`
    .slick-arrow {
        visibility: hidden;
    }

    width: 40%;
`;

export const NavBar = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const NavList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const NavListOption = styled.a`
    color: #ffffff;
    margin: 0 20px;
    text-decoration: none;
    font-weight: bold;
    transition: 500 linear;
    padding: 15px;

    &:hover {
        border-bottom: 5px solid #ffffff;
    }
`