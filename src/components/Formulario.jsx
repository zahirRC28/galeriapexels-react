import PropTypes from 'prop-types';
const Formulario = ({ buscador }) => {
    
    const handleSubmit = (ev) => {
        ev.preventDefault();//prevenimos envio del formulario
        const datos = new FormData(ev.currentTarget);// crear un Nuevo From data con los datos cuando hay un evento
        //console.log('datos Formulario',datos)
        const dato  = Object.fromEntries(datos.entries())//separamos todo en calve valor
        //console.log('categoria',dato);
        const categoria = dato.categoria
        console.log(categoria);
        const nuevaCategoria = (categoria).trim();//le quito los espacios

        buscador(nuevaCategoria)
        ev.currentTarget.reset();//luego reseteamos al formulario
    }

  return (
      <>
        <form onSubmit={handleSubmit}>
          <input type='text' id='categoria' name='categoria' placeholder='Qué quiere buscar?'/> 
          <input type = 'submit' />
        </form>
      </>
  )
}
Formulario.prototype = {
  buscador: PropTypes.func
}

export default Formulario
