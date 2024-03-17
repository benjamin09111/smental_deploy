import React from 'react'

const Footer = () => {
  return (

    <div class="fixed bottom-4 left-1/2 transform -translate-x-1/2 inline-flex mx-auto justify-between bg-blue-950 w-11/12 rounded-3xl">
          <a
            aria-current="page"
            class="inline-flex flex-col items-center text-xs font-medium py-3 px-4 text-blue-400 flex-grow"
            href="#"
          >
            <span class="icon-[bxs--home] size-7"></span>
            <span class="sr-only">Home</span>
          </a>

          <a
            class="inline-flex flex-col items-center text-xs font-medium text-blue-400 py-3 px-4 flex-grow"
            href="#"
          >
            <span class="icon-[icons8--plus] size-7"></span>
            <span class="sr-only">Add</span>
          </a>
          
          <button class="relative inline-flex flex-col items-center text-xs font-medium text-blue-400 py-3 px-6 flex-grow">
            <div class="absolute bottom-5 p-3 rounded-full border-4 border-blue-500 bg-blue-950">
              <span class="icon-[cryptocurrency--chat] size-8"></span>
            </div>
            <span class="sr-only">Chat</span>
          </button>
          <a
            class="inline-flex flex-col items-center text-xs font-medium text-blue-400 py-3 px-4 flex-grow"
            href="#"
          >
            <span class="icon-[mdi--search] size-7"></span>
            <span class="sr-only">Search</span>
          </a>
          <a
            class="inline-flex flex-col items-center text-xs font-medium text-blue-400 py-3 px-4 flex-grow"
            href="#"
          >
            <span class="icon-[iconamoon--profile-circle-fill] size-7"></span>
            <span class="sr-only">Profile</span>
          </a>
        </div>
  )
}

export default Footer
