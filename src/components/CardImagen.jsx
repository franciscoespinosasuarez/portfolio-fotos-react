import { useState } from 'react'
import ModalImg from './ModalImg'

const CardImagen = ({ foto, listaFotos, setListaFotos, setModalForm, editarFoto }) => {
    const [modalImg, setModalImg] = useState(false)

    const { url, titulo, descripcion, id } = foto
    const handleModalImg = (e) => {
        setModalImg(true)
    }

    return (
        <>
            {modalImg ? (
                <ModalImg foto={foto} setModalImg={setModalImg} listaFotos={listaFotos} setListaFotos={setListaFotos} setModalForm= {setModalForm} editarFoto= {editarFoto} />
            ) : (
                <div className='card'>
                    <div className='div-imagen'>
                        <img id={id} src={url} alt={titulo} onClick={handleModalImg} />
                    </div>



                </div>
            )}


        </>
    )
}

export default CardImagen