import { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { Cards } from './Cards'
import { Paginacion } from './Paginacion'
import connect from '../Hooks/fech'
import { Errores } from './Errores'
import './GridGaleria.css'

export const GridGaleria = ({ categoria, clearError }) => {
    const [datos, setDatos] = useState([]) //para poder actualizar los datos
    const [totalFotos, setTotalFotos] = useState(0)
    const [pagina, setPagina] = useState(1)
    const urlBase = "https://api.pexels.com/v1"
    
    const perPage = 12
    // const size = 'large2x'

    //para cuando cateoria y paginacion cambian o cargan por primera vez
    const fetchDatos = async () => {
        try {
            // const query = `${urlBase}/search?query=${categoria}&page=${pagina}&per_page=${perPage}&size=${size}&locale=es-ES`
            const query = `${urlBase}/search?query=${categoria}&page=${pagina}&per_page=${perPage}&locale=es-ES`
            const resp = await connect(query)
            //console.log(resp)
            const photos = resp.photos
            const total = resp.total_results
            //console.log(totalFotos);
            //console.log('fotos:', photos)
            const fotos = photos.map((foto) => ({
                img: foto.src.large,
                url: foto.url,
                descripcion: foto.alt
            }))
            setDatos(fotos)
            setTotalFotos(total)
            //se ejucta siempre, cuando el padre pase la funcion.
            if (clearError){
                clearError()
            } 
        } catch (error) {
            console.error('error conectando:', error)
            setDatos([])//actualizamos los datos si no hay
            setTotalFotos(0)
        }
    }
    useEffect(() => {
        //Ejecuta el llmado al api si el valor de categoria no es indefinido o nulo
        if (categoria){
            fetchDatos()
        } 
    }, [categoria, pagina])//las dependencias cuando se va a disparar el useEffect

    const handlePaginacion = (nuevoValor) => {
        setPagina(nuevoValor)
        //se ejucta siempre, cuando el padre pase la funcion.
        if (clearError){
            clearError()
        } 
    }

    return (
        <>  
        <section >
            {datos.length > 0 &&  (
                <p className='categoria'>{categoria}</p>
            )}
            <div className='flexContainer'>
                {datos.length > 0 && datos.map((foto, idx) => (
                    <Cards key={idx} img={foto.img} url={foto.url} desc={foto.descripcion} />
                ))
                }
                {datos.length === 0 && (
                <Errores mensaje="Sin resultados" detalles={`No se encontraron fotos para la categoría ${categoria}.`} />
            )}
            </div >
            {/* el && es un condicional de react para que cuandos e cumpla uno ejecute lo otro */}
            { datos.length > 0 && (    
            <div className='paginacion'>
                <Paginacion valorActual={pagina} pagina={handlePaginacion} totalPaginas={totalFotos} accion='primero'/>
                <Paginacion valorActual={pagina} pagina={handlePaginacion} totalPaginas={totalFotos} accion='retroceder'/>
                <p className='numPag'>{pagina}</p>
                <Paginacion valorActual={pagina} pagina={handlePaginacion} totalPaginas={totalFotos} accion='avanzar'/>
                <Paginacion valorActual={pagina} pagina={handlePaginacion} totalPaginas={totalFotos} accion='ultima'/>
            </div>
            )}
        </section>
        </>
    )
}

GridGaleria.propTypes = {
    categoria: PropTypes.string,
    clearError: PropTypes.func
};

