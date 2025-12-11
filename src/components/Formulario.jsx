const Formulario = ({ buscador }) => {
    
    const handleSubmit = (ev) => {
        ev.preventDefault();//prevenimos envio del formulario
        const datos = new FormData(ev.currentTarget);// crear un Nuevo From data con los datos
        const { categoria } = Object.fromEntries(datos.entries())//separamos todo en calve valor
        const nuevaCategoria = (categoria).trim();//le quito los espacios 
        buscador(nuevaCategoria)
        ev.currentTarget.reset();
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type='text' id='categoria' name='categoria' placeholder='Qué quiere buscar?'/> 
        <input type = 'submit' />
    </form>
  )
}

export default Formulario
