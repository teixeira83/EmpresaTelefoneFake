import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FormContainer, FormLine, Title, PriceContainer, Price, CloseIcon, PriceContainerRow, PriceLegend } from './styles';

import { setSource, setSources } from '../../redux/modules/sources';
import { setPlan, setPlans } from '../../redux/modules/plans';

import taxDataService from '../../services/tax';

import close from '../../assets/img/close.png';

export default function Form() {
    const dispatch = useDispatch();

    const { sources, sourceSelected } = useSelector((state) => state.sources);
    const { plans, planSelected } = useSelector((state) => state.plans);
    const [destiny, setDestiny] = useState('016');
    const [destinys, setDestinys] = useState(['016','017','018']);
    const [callTime, setCallTime] = useState(0);
    const [showPrice, setShowPrice] = useState(false);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        async function getFormSources() {
            const rawSources = await taxDataService.getAllSources();
            const sourceDataList = rawSources.data;
            const [firstSource] = rawSources.data;
            
            dispatch(setSource(firstSource.source));
            dispatch(setSources(sourceDataList));

        }
        getFormSources()
    },[dispatch]);

    useEffect(() => {
        async function getFormPlans() {
            const rawPlans = await taxDataService.getAllPlans();
            const planDataList = rawPlans.data;
            const [firstPlan] = rawPlans.data;

            dispatch(setPlan(firstPlan.minutes));
            dispatch(setPlans(planDataList));
        }
        getFormPlans();
    },[dispatch]);

    function getDestinyOptions(origin) {
        
        const originSelected = sources.find((source) => {
            return source.source === origin
        });

        const [firstDestination] = originSelected.destinations;
        const destinationsOptions = originSelected.destinations;
        setDestiny(firstDestination);
        setDestinys(destinationsOptions);
    };  

    function isAValidInputs(formObject){
        return parseFloat(formObject.plan) >= parseFloat(formObject.callTime) ? false : true;
    }

    async function handleSubmit(event) {
        
        event.preventDefault();
        const formObject = {
            source: sourceSelected,
            destination: destiny,
            callTime: callTime,
            plan: planSelected
        }

        if(isAValidInputs(formObject)) {
            const callInformation = await taxDataService.getCallInformation(formObject);
            const callPrice = callInformation.data.callValue;
            setPrice(`R$ ${parseFloat(callPrice)}`);
        } else {
            setPrice('Graças ao Plano Fale Mais, este mês sua conta será de graça.');
        }
    }

    const closePriceContainer = () => {
        setShowPrice(false);
    }

    return (
        <FormContainer>
            <Title>Calcule o valor da ligação</Title>
            <form className="calculator-form">
                <FormLine>
                    <label>
                        DDD Origem:
                    </label>
                    <select value={sourceSelected} onChange={e => {
                        dispatch(setSource(e.target.value))
                        getDestinyOptions(e.target.value);
                    }}>
                        ${sources.map((source) => {
                            return <option key={source._id} value={source.source}>{source.source}</option>
                        })}
                    </select>
                </FormLine>
                <FormLine>
                    <label>
                    DDD Destino:
                    </label>
                    <select value={destiny} onChange={e => setDestiny(e.target.value)}>
                        ${destinys.map((destiny) => {
                            return <option key={destiny} value={destiny}>{destiny}</option>
                        } )}
                    </select>
                </FormLine>
                <FormLine>
                    <label>
                    Tempo Liggação:
                    </label>
                    <input 
                        type="number"
                        value={callTime}
                        placeholder="minutos"
                        className="minute-input"
                        onChange={e => setCallTime(e.target.value)}
                    />
                </FormLine>
                <FormLine>
                <label>
                Plano FaleMais:
                </label>
                <select value={planSelected} onChange={e => {
                    dispatch(setPlan(e.target.value))}
                }>
                    ${plans.map((plan) => {
                        return <option key={plan._id} value={plan.minutes}>{plan.title}</option>
                    })}
                </select>
                </FormLine>
                <input type="submit" value="Enviar" className="btn-form" onClick={e => {
                    setShowPrice(true);
                    handleSubmit(e);
                }}/>
                <PriceContainer style={{visibility: showPrice ? 'visible' : 'hidden'}}>
                    <PriceContainerRow>
                        <PriceLegend>Sua conda deu:</PriceLegend>
                        <CloseIcon src={close} onClick={closePriceContainer}/>
                    </PriceContainerRow>
                    <Price>{price}</Price>
                </PriceContainer>
            </form>
        </FormContainer>
    );
}