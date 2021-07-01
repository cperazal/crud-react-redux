import { 
    ALERTA_MOSTRAR, 
    ALERTA_OCULTAR } 
from "../types";

const initialiState = {
    alerta: null
}

export default function alertaReducer(state = initialiState, action) {
    switch(action.type) {
        case ALERTA_MOSTRAR:
            return {
                ...state,
                alerta: action.payload
            }
        case ALERTA_OCULTAR:
            return {
                ...state,
                alerta: null
            }
        default:
            return state;
    }
}