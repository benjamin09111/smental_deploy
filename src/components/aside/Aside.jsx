import React from 'react'

const Aside = ({ state, setState, tipo }) => {
    return (
        <div style={{ height: "95vh" }} className='hidden lg:flex important flex-col fixed justify-between pb-16 w-64 border-r-2 bg-gray-900/90 border-gray-700/90 pt-6'>
            <div>
                {
                    (tipo === "US373_USER$%7FEV") && (
                        <a className='flex items-center gap-6 cursor-pointer pl-4 py-2 hover:bg-gray-950 w-full' onClick={() => setState("home")}>
                            <span className="icon-[bxs--home] text-2xl bg-gradient-primary"></span>
                            <b className={`text-gray-500 font-semibold ${state === "home" && "text-primary-custom"}`}>Inicio</b>
                        </a>
                    )
                }
                {
                    tipo === "psicologo" && (
                        <a className='flex items-center gap-6 cursor-pointer pl-4 py-2 hover:bg-gray-950 w-full' onClick={() => setState("posts")}>
                            <span className="icon-[bxs--home] text-2xl bg-gradient-primary"></span>
                            <b className={`text-gray-500 font-semibold ${state === "posts" && "text-primary-custom"}`}>Mis posts</b>
                        </a>
                    )
                }
                {
                    tipo !== "psicologo" && (
                        <a className='flex items-center gap-6 cursor-pointer pl-4 py-2 hover:bg-gray-950' onClick={() => setState("posts")}>
                            <span className="icon-[gridicons--pages] text-2xl bg-gradient-primary"></span>
                            <b className={`text-gray-500 font-semibold ${state === "posts" && "text-primary-custom"}`}>Posts</b>
                        </a>
                    )
                }
                {
                    tipo !== "admin" && (
                        <a className='flex items-center gap-6 cursor-pointer pl-4 py-2 hover:bg-gray-950' onClick={() => setState("crear")}>
                            <span className="icon-[icons8--plus] text-2xl bg-gradient-primary"></span>
                            <b className={`text-gray-500 font-semibold ${state === "crear" && "text-primary-custom"}`}>Crear</b>
                        </a>
                    )
                }
                {
                    tipo === "US373_USER$%7FEV" && (
                        <a className='flex items-center gap-6 cursor-pointer pl-4 py-2 hover:bg-gray-950' onClick={() => setState("buscar")}>
                            <span className="icon-[mdi--search] text-2xl bg-gradient-primary"></span>
                            <b className={`text-gray-500 font-semibold ${state === "buscar" && "text-primary-custom"}`}>Buscar profesionales</b>
                        </a>
                    )
                }
                {
                    tipo === "US373_USER$%7FEV" && (
                        <a className='flex items-center gap-6 cursor-pointer pl-4 py-2 hover:bg-gray-950' onClick={() => setState("chat")}>
                            <span className="icon-[cryptocurrency--chat] text-2xl bg-gradient-primary"></span>
                            <b className={`text-gray-500 font-semibold ${state === "chat" && "text-primary-custom"}`}>Chat Bot</b>
                        </a>
                    )
                }
            </div>
            <div>
                {
                    tipo !== "admin" && (
                        <a className='flex items-center gap-6 cursor-pointer pl-4 py-2 hover:bg-gray-950' onClick={() => setState("terminos")}>
                            <span className="icon-[material-symbols--info] text-2xl bg-gradient-primary"></span>
                            <b className='text-gray-500 font-semibold'>Términos y condiciones</b>
                        </a>
                    )
                }
                {
                    tipo !== "psicologo" && (
                        <a className='flex items-center gap-6 cursor-pointer pl-4 py-2 hover:bg-gray-950' onClick={() => setState("perfil")}>
                            <span className="icon-[material-symbols--menu] text-2xl bg-gradient-primary"></span>
                            <b className='text-gray-500 font-semibold'>{tipo == "admin" ? "Panel" : "Perfil"}</b>
                        </a>
                    )
                }
            </div>
        </div>
    )
}

export default Aside