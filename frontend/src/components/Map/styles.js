import styled from 'styled-components';

export const MapContainer = styled.div`
    display:flex;
    flex-direction: row;
    width: 100vw;
    margin: 50px 0;
`
export const MapTextContainer = styled.div`
    width: 50%;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
`

export const MapTextTitle = styled.h1`
    font-size: 28px;
    font-weight: bold;
    width: 60%;
`

export const MapTextContent = styled.h1`
    font-size: 20px;
    width: 60%;
    margin-top: 20px;
    margin-left: 50px;
`


export const MapImage = styled.img`
    width: 50%;
`