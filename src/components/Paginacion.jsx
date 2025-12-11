
import React, { useState } from 'react';


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

export default Paginacion
