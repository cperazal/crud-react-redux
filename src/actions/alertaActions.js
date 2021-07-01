import { 
    ALERTA_MOSTRAR, 
    ALERTA_OCULTAR } 
from "../types";

// muestra una alerta
export function mostrarAlertaAction(alerta){
    return (dispatch) => {
        dispatch(crearAlerta(alerta));
    }
}

const crearAlerta = (alerta) => ({
    type: ALERTA_MOSTRAR,
    payload: alerta
})

// ocultar alerta
export function ocultarAlertaAction() {
    return(dispatch) => {
        dispatch(ocultarAlerta());
    }
}

const ocultarAlerta = () => ({
    type: ALERTA_OCULTAR
})