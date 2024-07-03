import React from 'react'

const Template = ({ titulo, fecha, hashtag, descripcion, autor, index, imagen, tipo, link }) => {
  return (
    <div key={index} className='flex flex-col lg:flex-row p-6 mx-4 rounded-2xl shadow bg-gray-900 gap-12 relative'>

      <img src={imagen} className='w-full lg:w-1/4 rounded' alt="post-image" />

      <div className='flex flex-col'>
        <div className='text-3xl font-semibold text-secondary-custom'>{titulo}</div>
        <b className='font-normal text-2xl text-gray-100'>{autor}</b>
        <b className='font-normal text-gray-500'>Creado el {fecha}</b>
        <b className='text-[1rem] text-gray-300 text-right'>Temática: {hashtag}</b>
        <p className='text-gray-300 font-semibold mt-4 text-xl'>"
          {
            descripcion.length > 100 ?
            descripcion.slice(0, 100) + '...'
              : descripcion
          }"</p>
      </div>

      {
        tipo != "psicologo" && <a href={link} target='_blank' className='bottom-4 absolute right-8 hover:underline'>Leer más</a>
      }
    </div>
  )
}

export default Template
