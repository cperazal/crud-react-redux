import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { borrarProductoAction } from '../actions/productosActions';
import Swal from 'sweetalert2';
import { obtenerProductoEditar } from '../actions/productosActions';

const Producto = ({producto}) => {
    const {nombre, precio, id} = producto;

    const dispatch = useDispatch();

    const history = useHistory();

    const redireccionEditar = (producto) => {
        dispatch(obtenerProductoEditar(producto));
        history.push(`productos/editar/${producto.id}`);
    }

    const confirmarEliminarProducto = (id) => {
        Swal.fire({
            title: 'Estas seguro de eliminar el producto?',
            text: "Esta accion no puede revertirse!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!',
            cancelButtonText: 'Cancelar'
          }).then((result) => {              
            if (result.isConfirmed) {
                dispatch(borrarProductoAction(id));              
            }
          })

    }

    return ( 
        <tr>
            <td>{id}</td>
            <td>{nombre}</td>
            <td><span className="font-weigth-bold">$ {precio}</span></td>
            <td className="acciones">
                <button onClick={() => redireccionEditar(producto)} className="btn btn-primary mr-2">
                    Editar
                </button>
                <button onClick={() => confirmarEliminarProducto(id)} type="button" className="btn btn-danger">
                    Eliminar
                </button>
            </td>
        </tr>
     );
}
 
export default Producto;