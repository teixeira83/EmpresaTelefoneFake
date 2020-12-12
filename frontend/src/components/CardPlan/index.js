import React from 'react';

import { Title, Content, Button, CardPlanContainer} from './styles';

export default function CardPlan({title, content}) {

    return (
        <CardPlanContainer>
            <Title>FaleMais {title}</Title>
            <Content>{content} minutos para falar de graça o mês todo.</Content>
            <Button>Calcule seu plano</Button>
        </CardPlanContainer>
    )
}