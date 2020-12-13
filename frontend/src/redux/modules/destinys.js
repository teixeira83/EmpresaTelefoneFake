export const Types = {
    SET_DESTINY: 'destinys/SET_DESTINY',
    SET_DESTINYS: 'destinys/SET_DESTINY'
}

const initialState = {
    destinySelected: null,
    destinys: []
};

export default function reducer(state = initialState, action) {

    switch (action.Types) {

        case Types.SET_DESTINY:
            return { ...state, destiny: action.payload };
        
        case Types.SET_DESTINY:
            return { ...state, destinys: action.payload };
        
        default :
            return state;
    }
};

export function setDestiny(destiny) {
    return {
        type: Types.SET_DESTINY,
        payload: destiny || ''
    };
};

export function setDestinys(destinys) {
    return {
        type: Types.SET_DESTINYS,
        payload: destinys || []
    };
};