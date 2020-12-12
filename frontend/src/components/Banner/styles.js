import styled from 'styled-components';
import Slider from 'react-slick';
import { COLORS } from '../../assets/css/settings/colors';

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