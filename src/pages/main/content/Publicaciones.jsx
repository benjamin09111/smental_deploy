import React from 'react'
import publicaciones from "../../../json/publications";

const Publicaciones = ({tipo}) => {
  return (
    <div className='flex flex-col lg:items-center lg:justify-center  gap-6'>
      {
        publicaciones.map((publicacion)=> (
          <div style={{minWidth: "50vw"}} className='flex flex-col p-6 rounded text-white bg-black'>
            <h1>{publicacion.titulo}</h1>
            <p>{publicacion.contenido}</p>
            {
              tipo === "admin" && (
                <button type='button' className='px-3 py-2 my-6 text-white bg-red-400 hover:bg-red-500 rounded cursor-pointer'>Obtener información de usuario</button>
              )
            }
          </div>
        ))
      }
    </div>
  )
}

export default Publicaciones