import styled from 'styled-components';
import { COLORS } from '../../assets/css/settings/colors';

export const CompanyImage = styled.img`
    width: 550px;
    height: 400px;
    border-radius: 140px;
    margin: 100px 0 0 80px;
`

export const AboutTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const AboutTextTitle = styled.h1`
    font-size: 38px;
    font-weight: bold;
    color: ${COLORS.primary};

`

export const AboutTextContent = styled.p`
    margin-top: 50px;
    width: 80%;
    font-size: 24px;
`

export const AboutContainer = styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction: row;
    margin-top: 30px;
    margin-bottom: 100px;
`