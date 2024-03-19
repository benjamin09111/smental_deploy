import React from 'react'

const Aside = ({ setState, tipo }) => {
    return (
        <div style={{ height: "95vh" }} className='hidden lg:flex important flex-col fixed justify-between pb-16 w-64 border-r-2 bg-gray-900/90 border-gray-700/90 pt-6'>
            <div>
                {
                    (tipo === "usuario") && (
                        <a className='flex items-center gap-6 cursor-pointer pl-4 py-2 hover:bg-gray-950 w-full' onClick={() => setState("home")}>
                    <span class="icon-[bxs--home] text-2xl bg-gradient-primary"></span>
                    <b className='text-gray-500 font-semibold'>Inicio</b>
                </a>
                    )
                }
                {
                    tipo === "psicologo" && (
                        <a className='flex items-center gap-6 cursor-pointer pl-4 py-2 hover:bg-gray-950 w-full' onClick={() => setState("posts")}>
                    <span class="icon-[bxs--home] text-2xl bg-gradient-primary"></span>
                    <b className='text-gray-500 font-semibold'>Mis posts</b>
                </a>
                    )
                }
                {
                    tipo !== "psicologo" && (
                        <a className='flex items-center gap-6 cursor-pointer pl-4 py-2 hover:bg-gray-950' onClick={() => setState("posts")}>
                    <span class="icon-[gridicons--pages] text-2xl bg-gradient-primary"></span>
                    <b className='text-gray-500 font-semibold'>Posts</b>
                </a>
                    )
                }
                {
                    tipo !== "admin" && (
                        <a className='flex items-center gap-6 cursor-pointer pl-4 py-2 hover:bg-gray-950' onClick={() => setState("crear")}>
                    <span class="icon-[icons8--plus] text-2xl bg-gradient-primary"></span>
                    <b className='text-gray-500 font-semibold'>Crear</b>
                </a>
                    )
                }
                {
                    tipo === "usuario" && (
                        <a className='flex items-center gap-6 cursor-pointer pl-4 py-2 hover:bg-gray-950' onClick={() => setState("buscar")}>
                            <span class="icon-[mdi--search] text-2xl bg-gradient-primary"></span>
                            <b className='text-gray-500 font-semibold'>Buscar</b>
                        </a>
                    )
                }
                {
                    tipo === "usuario" && (
                        <a className='flex items-center gap-6 cursor-pointer pl-4 py-2 hover:bg-gray-950' onClick={() => setState("chat")}>
                    <span class="icon-[cryptocurrency--chat] text-2xl bg-gradient-primary"></span>
                    <b className='text-gray-500 font-semibold'>Chat Bot</b>
                </a>
                    )
                }
            </div>
            <div>
                {
                    tipo !== "admin" && (
                        <a className='flex items-center gap-6 cursor-pointer pl-4 py-2 hover:bg-gray-950' onClick={() => setState("terminos")}>
                    <span class="icon-[material-symbols--info] text-2xl bg-gradient-primary"></span>
                    <b className='text-gray-500 font-semibold'>Términos y condiciones</b>
                </a>
                    )
                }
                {
                    tipo !== "psicologo" && (
                        <a className='flex items-center gap-6 cursor-pointer pl-4 py-2 hover:bg-gray-950' onClick={() => setState("mas")}>
                    <span class="icon-[material-symbols--menu] text-2xl bg-gradient-primary"></span>
                    <b className='text-gray-500 font-semibold'>{tipo == "admin" ? "Panel" : "Perfil"}</b>
                </a>
                    )
                }
            </div>
        </div>
    )
}

export default Aside