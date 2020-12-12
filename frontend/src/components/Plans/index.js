import React from 'react';

import { PlansContainer, PlansTitle, PlansCardContainer} from './styles';
import { CardPlan } from '../index';

export default function Plans() {

    return (
        <PlansContainer>
            <PlansTitle>Confira nossos planos FaleMais!</PlansTitle>
            <PlansCardContainer>
                <CardPlan title="30" content="30"/>
                <CardPlan title="60" content="60"/>
                <CardPlan title="120" content="120"/>
            </PlansCardContainer>
        </PlansContainer>
    )
}