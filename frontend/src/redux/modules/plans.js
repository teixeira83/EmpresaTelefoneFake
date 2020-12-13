export const Types = {
    SET_PLAN: 'plans/SET_PLAN',
    SET_PLANS: 'plans/SET_PLANS',
};

const initialState = {
    planSelected: null,
    plans: []
};

export default function reducer(state = initialState, action) {
    
    switch (action.type){
        
        case Types.SET_PLAN:
            return { ...state, planSelected: action.payload };
        
        case Types.SET_PLANS:
            return { ...state, plans: action.payload };
    
        default :
            return state;
    }
};

export function setPlan(plan) {
    return {
        type: Types.SET_PLAN,
        payload: plan
    };
};

export function setPlans(plans) {
    return {
        type: Types.SET_PLANS,
        payload: plans
    };
};