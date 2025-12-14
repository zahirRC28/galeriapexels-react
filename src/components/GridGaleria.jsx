import { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import Cards from './Cards'
import Paginacion from './Paginacion'
import connect from '../Hooks/fech'
import './GridGaleria.css'

const GridGaleria = ({ categoria }) => {
    const [datos, setDatos] = useState([]) //para poder actualizar los datos
    const [pagina, setPagina] = useState(1)
    const urlBase = "https://api.pexels.com/v1"
    
    const perPage = 12
    const size = 'small'

    //para cuando cateoria y paginacion cambian o cargan por primera vez
    useEffect(() => {
        const fetchDatos = async () => {
            try {
                const query = `${urlBase}/search?query=${categoria}&page=${pagina}&per_page=${perPage}&size=${size}&locale=es-ES`
                const resp = await connect(query)
                const photos = resp.photos
                console.log('fotos:', photos)
                const fotos = photos.map((foto) => ({
                    img: foto.src.small,
                    url: foto.url,
                    descripcion: foto.alt
                }))
                setDatos(fotos)
            } catch (error) {
                console.error('error conectando:', error)
                setDatos([])//actualizamos los datos si no hay
            }
        }
        //Ejecuta el llmado al api si el valor de categoria no es indefinido o nulo
        if (categoria){
            fetchDatos()
        } 
    }, [categoria, pagina])//las dependencias cuando se va a disparar el useEffect

    const handlePaginacion = (nuevoValor) => {
        setPagina(nuevoValor)
    }

    return (
        <section >
            <p className='categoria'>{categoria}</p>
            <div className='flexContainer'>
                {datos.length > 0 && datos.map((foto, idx) => (
                    <Cards key={idx} img={foto.img} url={foto.url} desc={foto.descripcion} />
                ))
                }
            </div >
            { datos.length > 0 && (
            <div className='paginacion'>
                <Paginacion valorActual={pagina} pagina={handlePaginacion} accion='retroceder'/>
                <p className='numPag'>{pagina}</p>
                <Paginacion valorActual={pagina} pagina={handlePaginacion} accion='avanzar'/>
            </div>
            )}
        </section>
    )
}

GridGaleria.propTypes = {
  categoria: PropTypes.string
};

export default GridGaleria
