import React, { useState } from 'react';
// Actions de redux
import { crearNuevoProductoAction } from '../actions/productosActions';
import { useDispatch, useSelector } from 'react-redux';
import { mostrarAlertaAction, ocultarAlertaAction } from '../actions/alertaActions';

const ProductoNuevo = ({history}) => {

    const [nombre, guardarNombre] = useState('');
    const [precio, guardarPrecio] = useState('');

    // funcion dispath que devuelve otra funcion de redux
    const dispatch = useDispatch();
    // mandar a llamar el action con la funcion devuelta por dispatch
    const agregarProducto = (producto) => dispatch(crearNuevoProductoAction(producto));
    // cuando el usuario presione submit
    const submitNuevoProducto = e => {
        e.preventDefault();
        // validaciones
        if(nombre.trim() === '' || precio === 0){

            var alerta = {
                msg: 'Todos los campos son obligatorios',
                class: 'alert alert-danger text-center text-uppercase p3'
            }

            dispatch(mostrarAlertaAction(alerta));

            return;
        }

        dispatch(ocultarAlertaAction());

        agregarProducto({
            nombre,
            precio
        }
        );
        // refireccionar a la lista 
        history.push('/');
    }
    // acceder a los state del store
    const cargando = useSelector(state => state.productos.loading);
    const error = useSelector(state => state.productos.error);
    const alerta = useSelector(state => state.alerta.alerta);

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold"> 
                            Agregar nuevo producto
                        </h2>
                        {alerta ? <p className={alerta.class}>{alerta.msg}</p> : null}
                        <form onSubmit={submitNuevoProducto}>
                            <div className="form-group">
                                <label>Nombre del producto</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Nombre producto" 
                                    name="nombre"
                                    value={nombre}
                                    onChange={e => guardarNombre(e.target.value)}
                                />                                
                            </div>
                            <div className="form-group">
                                <label>Precio</label>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    placeholder="Precio producto" 
                                    name="precio"
                                    value={precio}
                                    onChange={e => guardarPrecio(e.target.value)}
                                />                                
                            </div>
                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Agregar</button>
                        </form>
                        {cargando ? <p>Cargando...</p>: null}
                        {error ? <p className="alert alert-danger p2 mt-4 text-center">Hubo un error</p>: null}
                    </div>
                </div>
            </div>
        </div>
    );
}   
 
export default ProductoNuevo;