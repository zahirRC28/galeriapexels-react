import { Formulario } from './Formulario';
import { useState } from 'react';
import { GridGaleria } from './GridGaleria';
import { Errores } from './Errores';

export const Galeria = () => {
    const [categorias, setCategorias] = useState([])
    const [error, setError] = useState(null)

    const handleCategoria = (nuevaCategoria)=>{
        if (!nuevaCategoria) {
            setError({ message: 'La búsqueda está vacía', details: 'Escribe una categoría antes de buscar.' })
            return
        }
        const existe = categorias.includes(nuevaCategoria)
        if (existe === false){
            setCategorias([...categorias, nuevaCategoria])
            setError(null)
            //console.log(categorias);
        }
        
    }
    
  return (
    <>
        <Formulario buscador = {handleCategoria} />

        {error && (
            <Errores message={error.message} details={error.details} />
        )}

        {categorias.map((categoria, index) => (
            <section key={index}>
                <GridGaleria categoria={categoria} />
            </section>
        ))}
    </> 
  )
}

