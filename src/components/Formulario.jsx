import { useState } from 'react'
import Error from './Error'

const Formulario = ({ listaFotos, setListaFotos, setModalForm, fotoEditar, setFotoEditar }) => {

    const [url, setUrl] = useState(fotoEditar.id ? fotoEditar.url : '')
    const [titulo, setTitulo] = useState(fotoEditar.id ? fotoEditar.titulo : '')
    const [descripcion, setDescripcion] = useState(fotoEditar.id ? fotoEditar.descripcion : '')

    const [foto, setFoto] = useState('')

    const [error, setError] = useState(false)


    const generarId = () => {
        if (fotoEditar.id) return fotoEditar.id
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36)
        return random + fecha
    }


    const handleFoto = (e) => {
        e.preventDefault()

        if ([url, titulo, descripcion].includes('')) {
            setError(true)
            return
        }


        const objetoFoto = {
            url,
            titulo,
            descripcion,
            id: generarId()
        }




        setFoto(objetoFoto)
        setError(false)
        setUrl('')
        setTitulo('')
        setDescripcion('')

        if (fotoEditar.id) {

            const nuevoArray = (listaFotos.filter(foto => foto.id != fotoEditar.id))
            console.log(nuevoArray)


            const arrayFotos = [...nuevoArray, objetoFoto]

            setListaFotos(arrayFotos)
            setModalForm(false)
            setFotoEditar({})



        } else {

            const arrayFotos = [...listaFotos, objetoFoto]

            setListaFotos(arrayFotos)
            setModalForm(false)
        }


    }



    return (
        <>

            <form onSubmit={handleFoto}>
                {error && <Error>Todos los campos son obligatorios</Error>}
                <label htmlFor="url" placeholder='Escribe la url de la imagen'>URL de la imagen</label>
                <input
                    type="text"
                    id="url"
                    value={url}
                    onChange={(e) => { setUrl(e.target.value) }}

                />

                <label htmlFor="titulo" placeholder='Escribe la url de la imagen'>Título de la imagen</label>
                <input
                    type="text"
                    id="titulo"
                    value={titulo}
                    onChange={(e) => { setTitulo(e.target.value) }}
                />

                <label htmlFor="descripcion" placeholder='Escribe la url de la imagen'>Descripcion de la imagen</label>
                <textarea
                    id="descripcion"
                    value={descripcion}
                    onChange={(e) => { setDescripcion(e.target.value) }}
                ></textarea>

                <input className='boton' type="submit" value="Guardar imagen" />
            </form>
        </>
    )
}

export default Formulario