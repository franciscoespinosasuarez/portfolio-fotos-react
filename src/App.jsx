import { useState, useEffect } from 'react'
import Formulario from './components/Formulario'
import CardImagen from './components/CardImagen'
import ModalForm from './components/ModalForm'

function App() {
  const [listaFotos, setListaFotos] = useState(JSON.parse(localStorage.getItem('fotos')) ?? [])
  const [modalForm, setModalForm] = useState(false)
  const [fotoEditar, setFotoEditar] = useState({})



//Cargar imagenes en Local Storage
  useEffect(() => {
    const fotosStorage = localStorage.setItem('fotos', JSON.stringify(listaFotos))
  }, [listaFotos])


  const handleMostrarModalForm = (e) => {
    e.preventDefault()
    setModalForm(true)
  }

  const editarFoto = (id) =>{
    const findFoto = listaFotos.find(foto => foto.id==id)
    setFotoEditar(findFoto)
    setModalForm(true)
    console.log('Editando foto', id)
  }


  return (
    <div className="container" >
      <h1 className='text-center'>Portfolio React</h1>

      <div className='btn-add-imagen'>
        <button onClick={handleMostrarModalForm}
        > Añadir imagen</button>
        {modalForm && (<ModalForm listaFotos={listaFotos} setListaFotos={setListaFotos} setModalForm={setModalForm} fotoEditar={fotoEditar} setFotoEditar= {setFotoEditar} />)}

      </div>

      <div>
        <h2 className='text-center'>{listaFotos.length > 0 ? 'Mis imágenes' : 'Sin imágenes que mostrar'}</h2>
        <div className='grid'>
          {listaFotos.map((foto) => (
            <CardImagen foto={foto} key={foto.id} listaFotos={listaFotos} setListaFotos={setListaFotos} setModalForm = {setModalForm} editarFoto= {editarFoto}/>
          ))
          }

        </div>
      </div>
    </div>
  )
}

export default App
