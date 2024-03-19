import React from 'react';

const Footer = ({ setState, tipo, setSearchMode }) => {
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 inline-flex mx-auto justify-between bg-third-custom w-full ">
      <a
        aria-current="page"
        className="inline-flex flex-col items-center text-xs font-medium py-3 px-4 text-gradient flex-grow"
        onClick={() => setState("home")}
      >
        <span className="icon-[bxs--home] text-3xl bg-gradient-primary cursor-pointer"></span>
        <span className="sr-only">Home</span>
      </a>

      <a
        className="inline-flex flex-col items-center text-xs font-medium text-primary-custom py-3 px-4 flex-grow"
        onClick={() => setState("publicaciones")}
      >
        <span className="icon-[gridicons--pages] text-3xl bg-gradient-primary cursor-pointer"></span>
        <span className="sr-only">Publics</span>
      </a>

      {
        tipo !== "usuario" && (
          <button className="relative inline-flex flex-col items-center text-xs font-medium text-primary-custom py-3 px-6 flex-grow" onClick={() => setState("crear")}>
            <div className="absolute bottom-3 p-3 rounded-full border-4 border-transparent bg-third-custom">
              <span className="icon-[icons8--plus] text-3xl bg-gradient-primary cursor-pointer"></span>
            </div>
            <span className="sr-only">Add</span>
          </button>
        )
      }

      <a
        className="inline-flex flex-col items-center text-xs font-medium text-primary-custom py-3 px-4 flex-grow"
        onClick={() => {
          setState("buscar");
          setSearchMode(true);
        }}
      >
        <span className="icon-[mdi--search] text-3xl bg-gradient-primary cursor-pointer"></span>
        <span className="sr-only">Search</span>
      </a>

      {
        tipo === "usuario" && (
          <a
            className="inline-flex flex-col items-center text-xs font-medium text-primary-custom py-3 px-4 flex-grow"
            onClick={() => setState("crear")}
          >
            <span className="icon-[icons8--plus] text-3xl bg-gradient-primary cursor-pointer"></span>
            <span className="sr-only">Crear</span>
          </a>
        )
      }

      <a
        className="inline-flex flex-col items-center text-xs font-medium text-primary-custom py-3 px-4 flex-grow"
        onClick={() => setState("chat")}
      >
        <span className="icon-[cryptocurrency--chat] text-3xl cursor-pointer bg-gradient-primary"></span>
        <span className="sr-only">Chatbot</span>
      </a>
    </div>
  );
};

export default Footer;
