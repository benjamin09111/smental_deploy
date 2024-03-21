import React from 'react'

const Unauthorized = () => {
  return (
    <div className='min-h-[100vh] flex flex-col justify-center items-center gap-6 w-full'>
        <h1 className='text-5xl text-gradient font-bold'>No estás autorizado para estar aquí.</h1>
        <p className='text-xl'>Por favor, inicia sesión</p>
    </div>
  )
}

export default Unauthorized
