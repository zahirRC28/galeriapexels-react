import { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { Cards } from './Cards'
import { Paginacion } from './Paginacion'
import connect from '../Hooks/fech'
import { Errores } from './Errores'

export const GridGaleria = ({ categoria }) => {
    const [datos, setDatos] = useState([]) //para poder actualizar los datos
    const [totalFotos, setTotalFotos] = useState(0)
    const [pagina, setPagina] = useState(1)
    const urlBase = "https://api.pexels.com/v1"
    
    const perPage = 9
    const size = 'small'

    //para cuando cateoria y paginacion cambian o cargan por primera vez
    useEffect(() => {
        const fetchDatos = async () => {
            try {
                const query = `${urlBase}/search?query=${categoria}&page=${pagina}&per_page=${perPage}&size=${size}&locale=es-ES`
                const resp = await connect(query)
                //onsole.log(resp)
                const photos = resp.photos
                const total = resp.total_results
                //console.log(totalFotos);
                //console.log('fotos:', photos)
                const fotos = photos.map((foto) => ({
                    img: foto.src.small,
                    url: foto.url,
                    descripcion: foto.alt
                }))
                setDatos(fotos)
                setTotalFotos(total)
            } catch (error) {
                console.error('error conectando:', error)
                setDatos([])//actualizamos los datos si no hay
                setTotalFotos(0)
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
        <>
            <p>{categoria}</p>
            {datos.length > 0 && datos.map((foto, idx) => (
                <Cards key={idx} img={foto.img} url={foto.url} desc={foto.descripcion} />
            ))
            }
            {datos.length === 0 && (
                <Errores message="Sin resultados" details="No se encontraron fotos para esta categoría." />
            )}
            { datos.length > 0 && (
            <>
                <Paginacion valorActual={pagina} pagina={handlePaginacion} totalPaginas={totalFotos} accion='primero'/>
                <Paginacion valorActual={pagina} pagina={handlePaginacion} totalPaginas={totalFotos} accion='retroceder'/>
                <p>{pagina}</p>
                <Paginacion valorActual={pagina} pagina={handlePaginacion} totalPaginas={totalFotos} accion='avanzar'/>
                <Paginacion valorActual={pagina} pagina={handlePaginacion} totalPaginas={totalFotos} accion='ultima'/>
            </>
            )}
        </>
    )
}

GridGaleria.propTypes = {
  categoria: PropTypes.string
};

