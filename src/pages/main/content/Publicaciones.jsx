import React from 'react';
import publicaciones from "../../../json/publications";

const Publicaciones = ({ tipo }) => {
  return (
    <div className='flex flex-col lg:items-center lg:justify-center'>
      {publicaciones.map((publicacion, index) => (
        <div key={index} className={`relative ${index !== publicaciones.length - 1 ? 'mb-4' : ''}`}>
          <div style={{minWidth: "50vw"}} className='flex flex-col p-6 rounded text-white bg-black'>
            <div className='flex justify-between items-center'>
              <div className='text-xs text-gray-400 flex items-center'>
                {publicacion.nombre}. {publicacion.fecha}
              </div>
              <div>
                <button className='text-xs text-gray-400 hover:text-red-500 bg-transparent border-none outline-none cursor-pointer'>
                  <span class="icon-[ic--baseline-report] size-5"></span>
                </button>
              </div>
            </div>
            <h1 className='text-lg font-semibold my-2'>{publicacion.titulo}</h1>
            <p className='text-sm mb-4'>{publicacion.contenido}</p>
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
