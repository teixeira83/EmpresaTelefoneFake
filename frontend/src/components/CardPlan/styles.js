import styled from 'styled-components';

import { COLORS } from '../../assets/css/settings/colors';

export const Title = styled.h1`
    margin: 30px 0;
    font-size: 20px;
    font-weight: bold;
`

export const Content = styled.span`
    font-size: 16px;
    margin: 30px 0;
    width: 60%;
    
`

export const Button = styled.button`
    font-size: 16px;
    margin: 30px 0;
    width: 60%;
    background-color: ${COLORS.primary};
    border: 0px;
    color: #ffffff;
    padding: 15px;
    cursor: pointer;
`

export const CardPlanContainer = styled.div`
    background-color: #fff;
    width: 28%;
    height: 340px;
    margin: 50px 15px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    box-shadow: 0 0 5em grey;
`