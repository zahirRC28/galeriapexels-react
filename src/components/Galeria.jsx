import { Formulario } from './Formulario';
import { useState } from 'react';
import { GridGaleria } from './GridGaleria';
import { Errores } from './Errores';

export const Galeria = () => {
    const [categorias, setCategorias] = useState([])
    const [error, setError] = useState(null)

    const handleCategoria = (nuevaCategoria)=>{
        setError(null)
        //si nuevaCategoria es null, undefined o false
        if (!nuevaCategoria) {
            setError({ mensaje: 'La búsqueda está vacía', detalles: 'Escribe una categoría antes de buscar.' })
            return //para no ejecutar el resto del codigo
        }
        const existe = categorias.includes(nuevaCategoria)
        if (existe === false){
            setCategorias([...categorias, nuevaCategoria])
            setError(null)
            //console.log(categorias);
        }
    }
    const borrarError = () =>{
        setError(null)
    }
    
  return (
    <>
        <Formulario className='formulario' buscador = {handleCategoria} />

        {error && (
            <Errores mensaje={error.mensaje} detalles={error.detalles} />
        )}

        {categorias.map((categoria, index) => (
            <section key={index}>
                <GridGaleria categoria={categoria} clearError = {borrarError} />
            </section>
        ))}
    </> 
  )
}

