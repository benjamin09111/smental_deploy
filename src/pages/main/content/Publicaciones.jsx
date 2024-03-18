import React from 'react'
import publicaciones from "../../../json/publications";

const Publicaciones = () => {
  return (
    <div className='flex flex-col lg:items-center lg:justify-center  gap-6'>
      {
        publicaciones.map((publicacion)=> (
          <div style={{minWidth: "50vw"}} className='flex flex-col p-6 rounded text-white bg-gradient-primary'>
            <h1>{publicacion.titulo}</h1>
            <p>{publicacion.contenido}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Publicaciones