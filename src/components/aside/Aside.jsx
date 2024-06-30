import React from 'react'

const Aside = ({ state, setState, tipo }) => {
    return (
        <div style={{ height: "95vh" }} className='hidden lg:flex important flex-col fixed pb-16 w-64 bg-gray-900/90 pt-6'>
            <a className='flex items-center gap-6 cursor-pointer pl-4 py-2 hover:bg-gray-950' onClick={() => setState("home")}>
                <span className="icon-[material-symbols--menu] text-2xl bg-gradient-primary"></span>
                <b className='text-gray-500 font-semibold'>Inicio</b>
            </a>
            <a className='flex items-center gap-6 cursor-pointer pl-4 py-2 hover:bg-gray-950' onClick={() => setState("crear")}>
                <span className="icon-[material-symbols--menu] text-2xl bg-gradient-primary"></span>
                <b className='text-gray-500 font-semibold'>Crear</b>
            </a>
            <a className='flex items-center gap-6 cursor-pointer pl-4 py-2 hover:bg-gray-950' onClick={() => setState("buscar")}>
                <span className="icon-[material-symbols--menu] text-2xl bg-gradient-primary"></span>
                <b className='text-gray-500 font-semibold'>Psicólogos</b>
            </a>
            <a className='flex items-center gap-6 cursor-pointer pl-4 py-2 hover:bg-gray-950' onClick={() => setState("posts")}>
                <span className="icon-[material-symbols--menu] text-2xl bg-gradient-primary"></span>
                <b className='text-gray-500 font-semibold'>Artículos</b>
            </a>
        </div>
    )
}

export default Aside