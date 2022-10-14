import React from 'react'
import Formulario from './Formulario'

const ModalForm = ({ listaFotos, setListaFotos, setModalForm, fotoEditar, setFotoEditar }) => {

    const handleCerrarModalForm = (e)=>{
        e.preventDefault()
        setModalForm(false)
    }
    return (
        <div className='modal'>
            <div className='boton-cerrar-div'>
                <button onClick={handleCerrarModalForm}>x</button>
            </div>

            <Formulario listaFotos={listaFotos} setListaFotos={setListaFotos} setModalForm = {setModalForm} fotoEditar={fotoEditar} setFotoEditar= {setFotoEditar}/>
        </div>
    )
}

export default ModalForm