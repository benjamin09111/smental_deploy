import React from 'react'

const Footer = ({setState}) => {
  return (

    <div class="fixed bottom-4 left-1/2 transform -translate-x-1/2 inline-flex mx-auto justify-between bg-third-custom w-11/12 rounded-3xl">
          <a
            aria-current="page"
            class="inline-flex flex-col items-center text-xs font-medium py-3 px-4 text-primary-custom flex-grow"
            onClick={()=>setState("home")}
          >
            <span class="icon-[bxs--home] size-8"></span>
            <span class="sr-only">Home</span>
          </a>

          <a
            class="inline-flex flex-col items-center text-xs font-medium text-primary-custom py-3 px-4 flex-grow"
            onClick={()=>setState("publicaciones")}
          >
            <span class="icon-[gridicons--pages] size-8"></span>
            <span class="sr-only">Publics</span>
          </a>
          
          <button class="relative inline-flex flex-col items-center text-xs font-medium text-primary-custom py-3 px-6 flex-grow" onClick={()=>setState("crear")}>
            <div class="absolute bottom-5 p-3 rounded-full border-4 border-transparent bg-third-custom">
              <span class="icon-[icons8--plus] size-8"></span>
            </div>
            <span class="sr-only">Add</span>
          </button>
          <a
            class="inline-flex flex-col items-center text-xs font-medium text-primary-custom py-3 px-4 flex-grow"
            onClick={()=>setState("buscar")}
          >
            <span class="icon-[mdi--search] size-8"></span>
            <span class="sr-only">Search</span>
          </a>
          <a
            class="inline-flex flex-col items-center text-xs font-medium text-primary-custom py-3 px-4 flex-grow"
            onClick={()=>setState("chat")}
          >
            <span class="icon-[cryptocurrency--chat] size-8"></span>
            <span class="sr-only">Chatbot</span>
          </a>
        </div>
  )
}

export default Footer
