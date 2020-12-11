import React from 'react'
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import Slider from 'react-slick';

import { COLORS } from '../../assets/css/settings/colors';

export const Logo = styled.img`
    width: 120px;
` 

export const Title = styled.h1`
    color: #ffffff;
    /* font-family: Montserrat; */
    font-size: 52px;
`

export const BannerContainer = styled.div`
    width: 100vw;
    height: 600px;
    display:flex;
    `

export const InformationContainer = styled.div`
    background-color: ${COLORS.secondary};
    width: 50%;
`

export const Carousel = styled(Slider)`
    .slick-slide {
    }
    
    width: 50%;
`;

const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
};

const Banner = () => (
    <BannerContainer>
        <InformationContainer>
            <Logo src={logo} alt="Logo da empresa Vxtel"/>
            <Title>Receba minutos para falar de graça para qualquer linha Vxtel.</Title>
        </InformationContainer>
        <Carousel {...settings}/>
    </BannerContainer>
);

export default Banner;