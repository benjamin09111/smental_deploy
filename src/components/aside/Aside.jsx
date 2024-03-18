import React from 'react'

const Aside = ({setState}) => {
    return (
        <div style={{height: "100vh"}} className='hidden lg:flex flex-col justify-between pb-16 pt-24 w-64 border-r-2 bg-gray-900/90 border-gray-700/90'>
            <div>
            <a className='flex items-center gap-6 cursor-pointer pl-4 py-2 hover:bg-gray-950 w-full' onClick={()=>setState("home")}>
                <span class="icon-[bxs--home] text-2xl bg-gradient-primary"></span>
                <b className='text-gray-500 font-semibold'>Inicio</b>
            </a>
            <a className='flex items-center gap-6 cursor-pointer pl-4 py-2 hover:bg-gray-950'  onClick={()=>setState("publicaciones")}>
                <span class="icon-[gridicons--pages] text-2xl bg-gradient-primary"></span>
                <b className='text-gray-500 font-semibold'>Publicaciones</b>
            </a>
            <a className='flex items-center gap-6 cursor-pointer pl-4 py-2 hover:bg-gray-950'  onClick={()=>setState("crear")}>
                <span class="icon-[icons8--plus] text-2xl bg-gradient-primary"></span>
                <b className='text-gray-500 font-semibold'>Crear</b>
            </a>
            <a className='flex items-center gap-6 cursor-pointer pl-4 py-2 hover:bg-gray-950'  onClick={()=>setState("buscar")}>
                <span class="icon-[mdi--search] text-2xl bg-gradient-primary"></span>
                <b className='text-gray-500 font-semibold'>Buscar</b>
            </a>
            <a className='flex items-center gap-6 cursor-pointer pl-4 py-2 hover:bg-gray-950'  onClick={()=>setState("chat")}>
                <span class="icon-[cryptocurrency--chat] text-2xl bg-gradient-primary"></span>
                <b className='text-gray-500 font-semibold'>Chat Bot</b>
            </a>
            </div>
            <div>
            <a className='flex items-center gap-6 cursor-pointer pl-4 py-2 hover:bg-gray-950'  onClick={()=>setState("terminos")}>
                <span class="icon-[material-symbols--info] text-2xl bg-gradient-primary"></span>
                <b className='text-gray-500 font-semibold'>Términos y condiciones</b>
            </a>
                <a className='flex items-center gap-6 cursor-pointer pl-4 py-2 hover:bg-gray-950'  onClick={()=>setState("mas")}>
                <span class="icon-[material-symbols--menu] text-2xl bg-gradient-primary"></span>
                <b className='text-gray-500 font-semibold'>Más</b>
            </a>
            </div>
        </div>
    )
}

export default Aside