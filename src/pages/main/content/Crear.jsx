import React, { useEffect, useState } from "react";
import Psicologo from "./crear/Psicologo";
import Usuario from "./crear/Usuario";

const Crear = ({tipo}) => {
  
  const [publicacion, setPublicacion] = useState({
    titulo: "",
    descripcion: "",
    fecha: "",
    autor_id: "",
    imagen: "",
    nombre: localStorage.getItem("nombre")
  });

  const [hashtag, setHashtag] = useState("");

  const create = () => {
    //obtener la fecha
    const today = new Date();;

    setPublicacion({
      ...publicacion,
      fecha: `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`,
      autor_id: localStorage.getItem("user_id")
    });

    //fetch: 
    console.log(publicacion, "HSG: ", hashtag)
  };

  return (
    <div className="flex items-start w-full">
      <section className='flex flex-col lg:pl-12 lg:w-2/3 px-4 lg:px-0 pt-6'>
      {
        tipo == "psicologo" && (
          <Psicologo hashtag={hashtag} setHashtag={setHashtag} publicacion={publicacion} setPublicacion={setPublicacion} />
        )
      }
      {
        tipo == "US373_USER$%7FEV" && (
          <Usuario hashtag={hashtag} setHashtag={setHashtag} publicacion={publicacion} setPublicacion={setPublicacion} />
        )
      }

      <button
        className="lg:w-1/2 bg-gradient-primary py-2"
        type="button"
        onClick={create}
      >
        Crear
      </button>
      </section>
      <section className='w-1/3 py-6 lg:px-24 shadow hidden lg:block'>
      <div className='py-3 px-6 rounded bg-gray-900 flex flex-col gap-2'>
          <h2 className='text-2xl'>Temáticas más buscadas en las publicaciones de usuarios</h2>
          <b>#Soledad</b>
          <b>#Depresión</b>
          <b>#Tristeza</b>
          <b>#Esperanza</b>
        </div>
      </section>
    </div>
  );
};

export default Crear;
