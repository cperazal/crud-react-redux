import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editarProductoAction } from '../actions/productosActions';
import { useHistory } from 'react-router';

const ProductoEditar = () => {
    // nuevo state del producto
    const [producto, guardarProducto] = useState({
        nombre: '',
        precio: ''
    })

    const dispatch = useDispatch();
    const history = useHistory();

    const productoEditar = useSelector(state => state.productos.productoEditar);
    
    useEffect(() => {
        guardarProducto(productoEditar);
    }, [productoEditar])

    //evento onchange para leer los datos del formulario
    const onChangeFormulario = (e) => {
        guardarProducto({
            ...producto,
            [e.target.name]: e.target.value
        })
    }

    const {nombre, precio} = producto;

    const submitEditarProducto = (e) => {
        e.preventDefault();
        dispatch(editarProductoAction(producto));
        history.push('/');
    }

    return ( 
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold"> 
                            Editar producto
                        </h2>
                        <form onSubmit={submitEditarProducto}>
                            <div className="form-group">
                                <label>Nombre del producto</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Nombre producto" 
                                    name="nombre" 
                                    value={nombre}
                                    onChange={onChangeFormulario}
                                />                                
                            </div>
                            <div className="form-group">
                                <label>Precio</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Precio producto" 
                                    name="precio" 
                                    value={precio}
                                    onChange={onChangeFormulario}
                                />                                
                            </div>
                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Guardar cambios</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ProductoEditar;