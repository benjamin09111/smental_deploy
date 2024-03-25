import React, { useState } from 'react';
import publicaciones from "../../../json/publications";

const Publicaciones = ({ tipo }) => {
  const [search, setSearch] = useState("");
  return (
    <div className='flex items-start w-full'>
      <section className='flex flex-col lg:pl-12 lg:w-2/3'>
      <div className='flex flex-col gap-6 px-4 lg:px-0 py-6'>
        <h1 className='text-gradient text-3xl font-bold'>Conoce y comparte las experiencias usuarios</h1>

        <div className='flex items-center gap-3'>
          <span class="icon-[ic--outline-search] text-2xl"></span>

          <input type="text" name='search' value={search} onChange={(e) => setSearch(e.target.value)} className='lg:w-1/3 focus:outline-none rounded bg-transparent px-2 py-2' style={{border: "1px solid gray"}} placeholder='Buscar por temática...' />
        </div>
      </div>
      {
        search === "" ? (
          publicaciones.map((publicacion, index) => (
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
                <div className='text-lg text-gray-400 font-semibold'>Temática: {publicacion.hashtag}</div>
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
                <button type='button' className='px-3 py-1 mt-2text-white bg-red-400 hover:bg-red-500 rounded cursor-pointer lg:w-1/3'>
                  Obtener información de usuario
                </button>
              )}
            </div>
          )
          )
        ) : (
          publicaciones.map((publicacion, index) => {
            if (publicacion.hashtag.includes(search)) {
              return (
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
                    <div className='text-lg text-gray-400 font-semibold'>Temática: {publicacion.hashtag}</div>
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
                    <button type='button' className='px-3 py-1 mt-2text-white bg-red-400 hover:bg-red-500 rounded cursor-pointer lg:w-1/3'>
                      Obtener información de usuario
                    </button>
                  )}
                </div>
              )
            }
          })
        )
      }
      </section>
      <section className='w-1/3 py-6 lg:px-24 shadow hidden lg:block'>
        <div className='py-3 px-6 rounded bg-gray-900 flex flex-col gap-2'>
          <h2 className='text-2xl'>Temáticas más buscadas en las publicaciones de usuarios</h2>
          <b>#Soledad</b>
          <b>#Depresión</b>
          <b>#Tristeza</b>
          <b>#Esperanza</b>
        </div>
      </section>
    </div>
  );
};

export default Publicaciones;
