import React from 'react'

function Botones({ texto, BotonDeClic, manejarClic }) {
  return (
    <div>
        <button className={ BotonDeClic ? "boton-clic" : "boton-reiniciar" } onClick={manejarClic} >
            {texto}
        </button>
    </div>
  )
}

export default Botones
