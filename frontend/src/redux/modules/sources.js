export const Types = {
    SET_SOURCE: 'sources/SET_SOURCE',
    SET_SOURCES: 'sources/SET_SOURCES'
};

const initialState = {
    sourceSelected: '',
    sources: []
};

export default function reducer(state = initialState, action) {
   
    switch (action.type) {

        case Types.SET_SOURCE:
            return { ...state, sourceSelected: action.payload };

        case Types.SET_SOURCES:
            return { ...state, sources: action.payload };
        
        default :
            return state;
    };
};

export function setSource(source) {
    return {
        type: Types.SET_SOURCE,
        payload: source
    };
};

export function setSources(sources) {
    return {
        type: Types.SET_SOURCES,
        payload: sources
    };
};