import React from 'react'
import Create from "./Create"

const Index = () => {
    return (
        <div className='bg-gray-900 h-[100vh] w-[100vw] flex flex-col justify-center items-center'>
            <div className='mb-12 text-gray-300 font-bold text-2xl'>Panel de Psicólogo</div>

            <>
            <h3 className='text-white mb-2'>Crear post</h3>
            <Create />
            </>
            
        </div>
    )
}

export default Index