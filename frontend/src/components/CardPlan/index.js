import React from 'react';

import { Title, Content, Button, CardPlanContainer} from './styles';

import { Link } from 'react-router-dom';
import * as ROUTES from '../../Routes';

export default function CardPlan({title, content}) {

    return (
        <CardPlanContainer>
            <Title>FaleMais {title}</Title>
            <Content>{content} minutos para falar de graça o mês todo.</Content>
            <Link to={ROUTES.CALCULATOR}>
                <Button>Calcule seu plano</Button>
            </Link>
        </CardPlanContainer>
    )
}