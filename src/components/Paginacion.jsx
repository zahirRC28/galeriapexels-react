import PropTypes from 'prop-types';

const Paginacion = ({ valorActual, pagina, accion }) => {
  
  const cambiarPagina = () => {
    if (accion === 'avanzar') {
      pagina(valorActual + 1);
    } else if (accion === 'retroceder') {
      if(valorActual > 1) {
        pagina(valorActual - 1);
      }
      
    }
  }

  return (
    <div>
      <button onClick={cambiarPagina}>{accion}</button>
    </div>
  );
}
Paginacion.prototype = {
  valorActual: PropTypes.number,
  pagina: PropTypes.func,
  accion: PropTypes.string
}

export default Paginacion
