

const Errores = ({ message = 'Ha ocurrido un error', onRetry, details }) => {
  
  return (
    <div className="error-container" role="alert" aria-live="polite">
      <div className="error-content">
        <strong>Error:</strong> {message}
        {details && (
          <div className="error-details">{details}</div>
        )}
      </div>
      {onRetry && (
        <button className="error-retry" onClick={onRetry} type="button">
          Reintentar
        </button>
      )}
    </div>
  )
}

export default Errores
