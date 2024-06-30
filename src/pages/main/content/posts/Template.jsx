import React from 'react'

const Template = ({titulo, fecha, hashtag, descripcion, autor, index}) => {
  return (
    <div key={index} className='flex flex-col px-3 pb-6 contenedor_publicacion'>

          <div className='flex justify-between items-center pt-2 pb-1'>
            <div className='flex items-center gap-6'>
              <div className='flex items-center gap-2'>
                <span className="icon-[solar--user-speak-bold] text-lg bg-gradient-primary"></span>
                <b className='font-normal text-gray-100'>{autor}</b>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <div className='text-xl font-semibold'>{titulo}</div>
            <p className='text-gray-300 font-semibold'>{descripcion}</p>
            <b className='font-normal text-gray-500'>{fecha}</b>
            <b className='text-lg text-white'>- {hashtag}</b>
          </div>
        </div>
  )
}

export default Template
