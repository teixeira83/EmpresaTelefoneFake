import React from 'react';
import { MapContainer, MapTextContainer , MapTextTitle, MapTextContent, MapImage} from './styles';

import map from '../../assets/img/map.png';

export default function Map() {

    return (
        <MapContainer>
            <MapTextContainer> 
                <MapTextTitle>Estamos presentes em 12 países espalhados pelo globo</MapTextTitle>
                <MapTextContent>A implantação da nossa tecnologia em diversos cenários diferentes faz de nos uma empresa dinâmica e moderna em que você pode confiar.</MapTextContent>
            </MapTextContainer>
            <MapImage src={map} />
        </MapContainer>
    )
}