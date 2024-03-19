import React from 'react';
import publicaciones from "../../../json/publications";

const Publicaciones = ({ tipo }) => {
  return (
    <div className='flex flex-col lg:items-center lg:justify-center'>
      {publicaciones.map((publicacion, index) => (
        <div key={index} className={`relative ${index !== publicaciones.length - 1 ? 'mb-4' : ''}`}>
          <div style={{minWidth: "50vw"}} className='flex flex-col rounded text-white bg-gray-900 rounded-bl rounded-br'>
          <div className='text-lg font-semibold my-2 bg-secondary-custom/70 rounded-tl shadow rounded-tr px-2 py-3'>{publicacion.titulo}</div>
          <div className='flex justify-between p-4 items-center'>
              <div className='text-xs flex-col text-gray-400 flex'>
                <p>{publicacion.nombre}</p>
                <p>{publicacion.fecha}</p>
              </div>
              <div>
                <button className='text-xs text-gray-400 hover:text-red-500 bg-transparent border-none outline-none cursor-pointer'>
                  <span class="icon-[ic--baseline-report] size-5"></span>
                </button>
              </div>
            </div>

            <p className='text-sm mb-4 p-4'>{publicacion.contenido}</p>


            <button type="button" className="px-3 py-1 text-sm text-white bg-transparent rounded cursor-pointer self-center">
              <span className="icon-[fa--comments-o]"></span>
            </button>



            {tipo === "admin" && (
              <button type='button' className='px-3 py-1 mt-2 text-sm text-white bg-red-400 hover:bg-red-500 rounded cursor-pointer absolute top-0 right-0'>
                Obtener información de usuario
              </button>
            )}
          </div>
          {index !== publicaciones.length - 1 && <div className="border-b border-gray-600 w-full mt-4"></div>}
        </div>
      ))}
    </div>
  );
};

export default Publicaciones;
