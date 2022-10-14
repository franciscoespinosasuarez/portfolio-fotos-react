import {useState} from 'react'
const ModalImg = ({ foto, setModalImg, listaFotos, setListaFotos, editarFoto }) => {
    const { url, titulo, descripcion, id } = foto

    const handleCerrarModalImg = () => {
        setModalImg(false)
    }


    //ELiminar foto

    const handleEliminar = () => {
        
        const nuevoArray = (listaFotos.filter(foto => foto.id != id))

        setListaFotos(nuevoArray)
        setModalImg(false)

    }

    const handleEditar= ()=>{
        setModalImg(false)
        editarFoto(id)
    }

    return (
        <div className='modal'>
            <div className='boton-cerrar-div'>
                <button onClick={handleCerrarModalImg}>x</button>
            </div>
            <div className="containter-modal-img">

                <img className='imagen-modal' src={url} alt={titulo} />

                <div className="botones-modal">
                    <button className="btn-foto editar" onClick={handleEditar}>Editar</button>
                    <button className="btn-foto eliminar" onClick={handleEliminar}>Eliminar</button>


                </div>

                <div className='text-center texto-modal'>
                    <h3>{titulo}</h3>
                    <p className='texto-imagen'>{descripcion}</p>
                </div>
            </div>

        </div>
    )
}

export default ModalImg