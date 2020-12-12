import React from 'react'
import logo from '../../assets/img/logo.png';

import { BannerContainer, BannerImage, Carousel, InformationContainer, Logo, Title, NavBar, NavList, NavListOption } from './styles';

import bannerImages from './images';

const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
};

export default function Banner(){
    return (
        <BannerContainer>
            <InformationContainer>
                <NavBar>
                    <Logo src={logo} alt="Logo da empresa Vxtel"/>
                    <NavList>
                        <NavListOption href="/">Home</NavListOption>
                        <NavListOption href="/sobre">Sobre</NavListOption>
                        <NavListOption href="/calculadora">Calculadora</NavListOption>
                    </NavList>
                </NavBar>
                <Title>Receba minutos para falar de graça para qualquer linha Vxtel.</Title>
            </InformationContainer>
            <Carousel {...settings}> 
                {bannerImages.map((img) => {
                    return <BannerImage src={img} alt="Foto do Restaurante" />
                })}
            </Carousel>
        </BannerContainer>
    )
}
