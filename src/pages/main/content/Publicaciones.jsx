import React from 'react';
import publicaciones from "../../../json/publications";

const Publicaciones = ({ tipo }) => {
  return (
    <div className='flex flex-col lg:px-10 lg:py-6 w-full'>
      <div className='flex flex-col gap-6 px-4 lg:px-0 py-4'>
        <h1 className='text-lg text-gray-400'>Conoce y comparte las experiencias usuarios</h1>
        
        <input type="text" className='input lg:w-1/3' placeholder='Buscar por temática...' />
      </div>
      {publicaciones.map((publicacion, index) => (
        <div key={index} className='flex flex-col px-3 pb-6 contenedor_publicacion'>

          <div className='flex justify-between items-center pt-2 pb-1'>
            <div className='flex items-center gap-6'>
              <div className='flex items-center gap-2'>
                <span className="icon-[solar--user-speak-bold] text-lg bg-gradient-primary"></span>
                <b className='font-normal text-gray-100'>{publicacion.nombre}</b>
              </div>
            </div>
            <div>
              <span className="icon-[material-symbols--report] text-xl text-red-300 cursor-pointer hover:text-red-600"></span>
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <div className='text-xl font-semibold'>{publicacion.titulo}</div>
            <p className='text-gray-300 font-semibold'>{publicacion.contenido}</p>
            <b className='font-normal text-gray-500'>{publicacion.fecha}</b>
          </div>

          <div className='flex items-center gap-3 '>
            <div className='flex items-center mt-3 gap-2 p-2 rounded bg-gray-800 w-fit'>
              <span className="icon-[fluent--comment-16-regular] text-2xl"></span>
              <b>{publicacion.comentarios}</b>
            </div>

            <div className='flex items-center gap-2 flex-wrap w-full pt-3'>
              <input type="text" className='input_coment' placeholder='Apoya con tu comentario' />
              <button className='hover:text-secondary-custom text-gray-300'>Publicar</button>
            </div>
          </div>

          {
            publicacion.comentarios > 0 && (
              <b className='text-gray-400 mt-2 cursor-pointer underline'>Ver comentarios</b>
            )
          }

          {tipo === "admin" && (
            <button type='button' className='px-3 py-1 mt-2 text-sm text-white bg-red-400 hover:bg-red-500 rounded cursor-pointer absolute top-0 right-0'>
              Obtener información de usuario
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Publicaciones;
