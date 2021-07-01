import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    LISTA_PRODUCTOS,
    LISTA_PRODUCTOS_EXITO,
    LISTA_PRODUCTOS_ERROR,
    PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINAR_EXITO,
    PRODUCTO_ELIMINAR_ERROR,
    PRODUCTO_EDITAR,
    PRODUCTO_EDITAR_EXITO,
    PRODUCTO_EDITAR_ERROR,
    PRODUCTO_EDITAR_INICIO
} from '../types'

import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

export function crearNuevoProductoAction(producto){
    return async (dispatch) => {
        dispatch(agregarProducto());
        try {
            // enviar producto a la API
            await clienteAxios.post("productos", producto)
            // si todo sale bien, enviar producto al state para actualizarlo
            dispatch(agregarProductoExito(producto));
            Swal.fire(
                'Correcto',
                'El producto ha sido agregado correctamente',
                'success'
            )
        } catch (error) {
            dispatch(agregarProductoError(true))
            Swal.fire({
                title: 'Error',
                text: 'Ha ocurrido un error, por favor intente mas tarde',
                icon: 'error'
            })
        }
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
})

const agregarProductoExito = (producto) => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})

const agregarProductoError = (estado) => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
})

// funcion para obtener los productos desde el api
export function obtenerProductosAction() {
    return async(dispatch) => {
        dispatch(descargarProductos());
        try {
            const response = await clienteAxios.get('productos');
            dispatch(descargarProductosExito(response.data));
        } catch (error) {
            dispatch(descargarProductosError())
        }

    }
}

const descargarProductos = () => ({
    type: LISTA_PRODUCTOS,
    payload: true
})

const descargarProductosExito = (productos) => ({
    type: LISTA_PRODUCTOS_EXITO,
    payload: productos
})

const descargarProductosError = () => ({
    type: LISTA_PRODUCTOS_ERROR,
    payload: true
})

// funcion para eliminar producto
export function borrarProductoAction(id){
    return async (dispatch) => {
        dispatch(obtenerProductoEliminar(id));

        try {
            await clienteAxios.delete(`productos/${id}`);
            dispatch(eliminarProductoExito());
            Swal.fire(
                'Eliminado!',
                'El producto ha sido eliminado.',
                'success'
              )
        } catch (error) {
            dispatch(eliminarProductoError());
        }
    }
}

const obtenerProductoEliminar = (id) =>({
    type: PRODUCTO_ELIMINAR,
    payload: id
})

const eliminarProductoExito = () => ({
    type: PRODUCTO_ELIMINAR_EXITO
})

const eliminarProductoError = () => ({
    type: PRODUCTO_ELIMINAR_ERROR,
    payload: true
})

// funcion para editar producto

export function obtenerProductoEditar(producto) {
    return (dispatch) => {
        dispatch(obtenerProductoEditarAction(producto))
    }
}

const obtenerProductoEditarAction = (producto) => ({
    type: PRODUCTO_EDITAR,
    payload: producto
})

//iniciar la edicion de producto
export function editarProductoAction(producto) {
    return async (dispatch) => {
        dispatch(editarProducto(producto))
        try {
            await clienteAxios.put(`productos/${producto.id}`, producto);
            dispatch(productoEditarExito(producto));
        } catch (error) {
            dispatch(productoEditarError(true));
        }
    }
}

const editarProducto = (producto) => ({
    type: PRODUCTO_EDITAR_INICIO,
    payload: producto
})

const productoEditarExito = (producto) => ({
    type: PRODUCTO_EDITAR_EXITO,
    payload: producto
})

const productoEditarError = () => ({
    type: PRODUCTO_EDITAR_ERROR,
    payload: true
})


