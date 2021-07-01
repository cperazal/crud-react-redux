
import {combineReducers} from 'redux'
import productosReducers from './productosReducers'
import alertaReducers from './alertaReducers'

export default combineReducers({
    productos: productosReducers,
    alerta: alertaReducers
})