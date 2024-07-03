import React from 'react'

const Aside = ({ state, setState, tipo }) => {
    return (
        <div style={{ height: "95vh" }} className='hidden lg:flex important flex-col fixed pb-16 w-[20rem] bg-fourth-custom text-2xl top-[5rem] pt-12 gap-6'>
            <a className='flex items-center gap-6 cursor-pointer pl-6 py-6 hover:bg-third-custom' onClick={() => setState("home")}>
                <span className="icon-[ic--baseline-home] text-4xl text-secondary-custom"></span>
                <b className='text-white font-semibold'>Inicio</b>
            </a>
            <a className='flex items-center gap-6 cursor-pointer pl-6 py-6 hover:bg-third-custom' onClick={() => setState("crear")}>
                <span className="icon-[ic--baseline-create] text-4xl text-secondary-custom"></span>
                <b className='text-white font-semibold'>Crear</b>
            </a>
            <a className='flex items-center gap-6 cursor-pointer pl-6 py-6 hover:bg-third-custom' onClick={() => setState("buscar")}>
                <span className="icon-[mdi--user] text-3xl text-secondary-custom"></span>
                <b className='text-white font-semibold'>Psicólogos</b>
            </a>
            <a className='flex items-center gap-6 cursor-pointer pl-6 py-6 hover:bg-third-custom' onClick={() => setState("posts")}>
                <span className="icon-[mdi--files] text-3xl text-secondary-custom"></span>
                <b className='text-white font-semibold'>Posts y Artículos</b>
            </a>
        </div>
    )
}

export default Aside