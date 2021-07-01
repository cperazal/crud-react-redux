import React, {Fragment, useEffect} from 'react';  
import { obtenerProductosAction } from '../actions/productosActions';
import { useSelector, useDispatch } from 'react-redux';
import Producto from './Producto';

const Productos = () => {

    const dispatch = useDispatch();
    const productos = useSelector(state => state.productos.productos);
    const error = useSelector(state => state.productos.error);
    const cargando = useSelector(state => state.productos.loading);

    useEffect(()=> {
        // consultar api de productos
        const cargarProductos = () => dispatch(obtenerProductosAction());
        cargarProductos();
        // eslint-disable-next-line
    }, [])

    return (  
        <Fragment>
            <h2 className="text-center my-5">Listado de Productos</h2>

            {cargando ? <p>Cargando...</p>: null}
            {error ? <p className="alert alert-danger p2 mt-4 text-center">Hubo un error</p>: null}

            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.length === 0 ? null: (
                        productos.map(producto =>(
                            <Producto 
                                key={producto.id}
                                producto={producto}
                            />
                        ))
                    )}
                </tbody>
            </table>
               
        </Fragment>
    );
}
 
export default Productos;