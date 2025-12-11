import PropTypes from 'prop-types';
import Formulario from './Formulario';
import { useState } from 'react';
import GridGaleria from './GridGaleria';

const Galeria = () => {
    const [categorias, setCategorias] = useState ([])

    const handleCategoria = (nuevaCategoria)=>{
        setCategorias([...categorias, nuevaCategoria])
    }
    
  return (
    <>
        <Formulario buscador = {handleCategoria} />
        {categorias.map((categoria) => (
            <section key={categoria}>
                <GridGaleria categoria={categoria} />
            </section>
        ))}
    </> 
  )
}

Galeria.propTypes = {
    categoria: PropTypes.array
}

export default Galeria
