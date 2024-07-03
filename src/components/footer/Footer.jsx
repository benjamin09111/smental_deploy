import React from 'react';

const Footer = ({ state, setState, tipo, setSearchMode }) => {
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 inline-flex mx-auto justify-between bg-third-custom w-full ">
      <div className={`${state === "home" && "bg-gray-800"} p-1 rounded`}>
        <a
          aria-current="page"
          className="inline-flex flex-col items-center text-xs font-medium py-3 px-4 text-gradient flex-grow"
          onClick={() => setState("home")}
        >
          <span className="icon-[bxs--home] text-3xl bg-gradient-primary cursor-pointer"></span>
          <span className="sr-only">Home</span>
        </a>
      </div>

      <div className={`${state === "crear" && "bg-gray-800"} p-1 rounded`}>
        <a
          className="inline-flex flex-col items-center text-xs font-medium text-primary-custom py-3 px-4 flex-grow"
          onClick={() => setState("crear")}
        >
          <span className="icon-[icons8--plus] text-3xl bg-gradient-primary cursor-pointer"></span>
          <span className="sr-only">Add</span>
        </a>
      </div>


      <div className={`${state === "buscar" && "bg-gray-800"} p-1 rounded`}>
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
      </div>

      <div className={`${state === "posts" && "bg-gray-800"} p-1 rounded`}>
        <a
          className="inline-flex flex-col items-center text-xs font-medium text-primary-custom py-3 px-4 flex-grow"
          onClick={() => setState("posts")}
        >
          <span className="icon-[gridicons--pages] text-3xl bg-gradient-primary cursor-pointer"></span>
          <span className="sr-only">Publics</span>
        </a>
      </div>

    </div>
  );
};

export default Footer;
