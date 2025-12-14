import Formulario from './Formulario';
import { useState } from 'react';
import GridGaleria from './GridGaleria';
import './Galeria.css'

const Galeria = () => {
    const [categorias, setCategorias] = useState ([])

    const handleCategoria = (nuevaCategoria)=>{
        setCategorias([...categorias, nuevaCategoria])
        console.log(categorias);
    }
    
  return (
    <>
        <Formulario className='formulario' buscador = {handleCategoria} />

        {categorias.map((categoria) => (
            <section key={categoria}>
                <GridGaleria categoria={categoria} />
            </section>
        ))}
    </> 
  )
}

export default Galeria
