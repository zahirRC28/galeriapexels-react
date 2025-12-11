import { useEffect, useState } from 'react'
import Cards from './Cards'
import Paginacion from './Paginacion'
import connect from '../Hooks/fech'

const GridGaleria = ({ categoria }) => {
    const [datos, setDatos] = useState([]) //para poder actualizar los datos
    const [pagina, setPagina] = useState(1)
    const urlBase = "https://api.pexels.com/v1"
    
    const perPage = 9
    const size = 'small'

    useEffect(() => {
        const fetchDatos = async () => {
            try {
                const query = `${urlBase}/search?query=${categoria}&page=${pagina}&per_page=${perPage}&size=${size}&locale=es-ES`
                const resp = await connect(query)
                const photos = resp.photos
                console.log('photos:', photos)
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
        if (categoria) fetchDatos()
    }, [categoria, pagina])
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
            { datos.length > 0 && (
            <>
                <Paginacion valorActual={pagina} pagina={handlePaginacion} accion='retroceder'/>
                <p>{pagina}</p>
                <Paginacion valorActual={pagina} pagina={handlePaginacion} accion='avanzar'/>
            </>
            )}
        </>
    )
}



export default GridGaleria
