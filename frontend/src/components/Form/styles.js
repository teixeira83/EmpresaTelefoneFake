import styled from 'styled-components';

import { COLORS } from '../../assets/css/settings/colors';

export const FormContainer = styled.div`
    margin: 50px auto;
    width: 800px;
    height: 550px;
    background-color: ${COLORS.primary};
    border-radius: 100px;
    color: #ffffff;
    .calculator-form {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        margin-top: 50px;
        align-items: center;
        font-size: 16px;
        line-height: 30px;
        font-weight: 400;
    }

    .btn-form {
        width: 200px;
        margin-top: 50px;
    }
    
    & select {
        width: 150px;
        display: flex;
        justify-content: right
        
    }

    .minute-input {
        width: 150px;
    }
`

export const FormLine = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
`

export const Title = styled.h1`
    font-size: 32px;
    padding-top: 100px;
    text-align: center;
    font-weight: bold;
    
`
export const PriceContainer = styled.div`
    margin-top: 30px;
    max-width: 650px;
    max-height: 300px;
    display:flex;
    flex-direction: column;
    background-color: ${COLORS.third};
    box-shadow: 0 0 15em ${COLORS.primary};
    visibility: hidden;
`

export const Price = styled.h1`
    font-size:38px;
    color: ${COLORS.primary};
    text-align: center;
    margin: 30px ;
`

export const CloseIcon = styled.img`
    width: 50px;
    height: 50px;
    margin-top: 0;
    cursor: pointer;
`

export const PriceContainerRow = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
`

export const PriceLegend = styled.span`
    color: ${COLORS.primary};
    margin-left: 15px;
`