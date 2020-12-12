import styled from 'styled-components';

import { COLORS } from '../../assets/css/settings/colors';

export const FooterContainer = styled.div`
    width: 100vw;
    height: 100px;
    background-color: ${COLORS.secondary};
    display:flex;
    justify-content: center;
    align-items: center;

    
    position: relative;
    bottom: 0px;
    left: 0px;
    right: 0px;
`

export const Logo = styled.img`
    width: 120px;
    height: 50px;
` 