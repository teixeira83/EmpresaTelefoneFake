import styled from 'styled-components';

import { COLORS } from '../../assets/css/settings/colors';

export const PlansContainer = styled.div `
    background-color: ${COLORS.third};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const PlansTitle = styled.h1 `
    font-size: 24px;
    font-weight: bold;
    justify-content: center;
    margin: 100px 0;
`

export const PlansCardContainer = styled.div `
    display: flex;
    flex-direction: row;
    margin-bottom: 100px;
`