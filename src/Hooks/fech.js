const client = import.meta.env.VITE_API_KEY

const connect = async (urlAp) => {
    try {
        const resp = await fetch(urlAp, {
            method: 'GET', // el metodo para el llamado
            headers: {
                Authorization: client , //aqui invocamos el token
            }
        });
        if(resp.ok){
            const datos = await resp.json()
            return datos
        } else {
            throw new Error('No hay resultados')
        }
    } catch (error) {
        throw new Error(`${error} no encontramos nada`)
    }
}
export default connect;