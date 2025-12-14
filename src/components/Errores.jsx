import PropTypes from 'prop-types';

export const Errores = ({ message = 'Ha ocurrido un error', details }) => {
  return (
    <div>
      <div>
        {/* Título y mensaje principal del error */}
        <h2>Error:</h2> {message}
        {/* Si hay detalles, se renderiza un bloque adicional con información extra */}
        {details && (
          <p>{details}</p>
        )}
      </div>
    </div>
  )
}
Errores.PropTypes = {

}

