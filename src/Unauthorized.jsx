import React from 'react'

const Unauthorized = () => {
  return (
    <div className='min-h-[100vh] flex flex-col justify-center items-center'>
      <h1 className='text-3xl font-bold text-center'>Oops!</h1>
      <p className='text-lg'>No deberías estar aquí. No autorizado.</p>
    </div>
  )
}

export default Unauthorized
