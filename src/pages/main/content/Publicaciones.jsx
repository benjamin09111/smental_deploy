import React from 'react'
import publicaciones from "../../../json/publications";

const Publicaciones = () => {
  return (
    <div>
      {
        publicaciones.map((publicacion)=> (
          <div>
            <h1>{publicacion.titulo}</h1>
            <p>{publicacion.contenido}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Publicaciones