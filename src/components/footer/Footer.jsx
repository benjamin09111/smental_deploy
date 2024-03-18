import React from 'react'

const Footer = ({setState}) => {
  return (

    <div class="fixed bottom-0 left-1/2 transform -translate-x-1/2 inline-flex mx-auto justify-between bg-third-custom w-full ">
          <a
            aria-current="page"
            class="inline-flex flex-col items-center text-xs font-medium py-3 px-4 text-gradient flex-grow"
            onClick={()=>setState("home")}
          >
            <span class="icon-[bxs--home] text-3xl bg-gradient-primary cursor-pointer"></span>
            <span class="sr-only">Home</span>
          </a>

          <a
            class="inline-flex flex-col items-center text-xs font-medium text-primary-custom py-3 px-4 flex-grow"
            onClick={()=>setState("publicaciones")}
          >
            <span class="icon-[gridicons--pages] text-3xl bg-gradient-primary cursor-pointer"></span>
            <span class="sr-only">Publics</span>
          </a>
          
          <button class="relative inline-flex flex-col items-center text-xs font-medium text-primary-custom py-3 px-6 flex-grow" onClick={()=>setState("crear")}>
            <div class="absolute bottom-3 p-3 rounded-full border-4 border-transparent bg-third-custom">
            <span class="icon-[icons8--plus] text-3xl bg-gradient-primary cursor-pointer"></span>
            </div>
            <span class="sr-only">Add</span>
          </button>
          <a
            class="inline-flex flex-col items-center text-xs font-medium text-primary-custom py-3 px-4 flex-grow"
            onClick={()=>setState("buscar")}
          >
            <span class="icon-[mdi--search] text-3xl bg-gradient-primary cursor-pointer"></span>
            <span class="sr-only">Search</span>
          </a>
          <a
            class="inline-flex flex-col items-center text-xs font-medium text-primary-custom py-3 px-4 flex-grow"
            onClick={()=>setState("chat")}
          >
            <span class="icon-[cryptocurrency--chat] text-3xl cursor-pointer bg-gradient-primary"></span>
            <span class="sr-only">Chatbot</span>
          </a>
        </div>
  )
}

export default Footer
