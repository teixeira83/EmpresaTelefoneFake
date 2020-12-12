import styled from 'styled-components';

export const FormContainer = styled.div`
    margin: 50px auto;
    width: 800px;
    height: 550px;
    background-color: #ffffff;
    border-radius: 100px;
    
    .calculator-form {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        margin-top: 50px;
        align-items: center;
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
    
`
