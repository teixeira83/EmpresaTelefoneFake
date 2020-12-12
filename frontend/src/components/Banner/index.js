import React from 'react'
import { BannerContainer, BannerImage, Carousel, InformationContainer, Title } from './styles';

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
