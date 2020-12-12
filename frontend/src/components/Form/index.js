import React, { useState } from 'react'

import { FormContainer, FormLine, Title } from './styles';

export default function Form() {

    const [source, setSource] = useState(null);
    const [destiny, setDestiny] = useState(null);
    const [connectionTime, setConnectionTime] = useState('');
    const [plan, setPlan] = useState('');

    return (
        <FormContainer>
            <Title>Calcule o valor da ligação</Title>
            <form className="calculator-form">
                <FormLine>
                    <label>
                        DDD Origem:
                    </label>
                    <select value={source} onChange={(e) => setSource(e.target.value)}>
                        <option value="laranja">011</option>
                        <option value="limao">016</option>
                        <option value="coco">017</option>
                        <option value="manga">018</option>
                    </select>
                </FormLine>
                <FormLine>
                    <label>
                    DDD Destino:
                    </label>
                    <select value={destiny} onChange={(e) => setDestiny(e.target.value)}>
                        <option value="abacate">011</option>
                        <option value="mexirica">016</option>
                        <option value="abobrinha">017</option>
                        <option value="maracuja">018</option>
                    </select>
                </FormLine>
                <FormLine>
                    <label>
                    Tempo Liggação:
                    </label>
                    <input value={connectionTime}
                        onChange={(e) => setConnectionTime(e.target.value)}
                        type="number"
                        placeholder="minutos"
                        className="minute-input" />
                </FormLine>
                <FormLine>
                <label>
                Plano FaleMais:
                </label>
                <select value={plan} onChange={(e) => setPlan(e.target.value)}>
                    <option value="abacate">FaleMais 30</option>
                    <option value="mexirica">FaleMais 60</option>
                    <option value="abobrinha">FaleMais 120</option>
                </select>
                </FormLine>
                <input type="submit" value="Enviar" className="btn-form"/>
            </form>
        </FormContainer>
    );
}