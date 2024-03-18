import React, { useEffect, useState } from "react";
import Psicologo from "./crear/Psicologo";
import Usuario from "./crear/Usuario";

const Crear = ({tipo}) => {
  const [publicacion, setPublicacion] = useState({
    titulo: "",
    descripcion: "",
    fecha: "",
    autor_id: "",
    imagen: ""
  });

  const [hashtag, setHashtag] = useState("vacio");

  const create = () => {
    //obtener la fecha
    const today = new Date();;

    setPublicacion({
      ...publicacion,
      fecha: `${today.getFullYear()}+${today.getMonth() + 1}+${today.getDate()}`,
      autor_id: localStorage.getItem("user_id")
    });

    //fetch: 
    console.log(publicacion, "HSG: ", hashtag)
  };

  return (
    <div className="flex flex-col gap-10 pb-6">
      {
        tipo == "psicologo" && (
          <Psicologo hashtag={hashtag} setHashtag={setHashtag} publicacion={publicacion} setPublicacion={setPublicacion} />
        )
      }
      {
        tipo == "usuario" && (
          <Usuario hashtag={hashtag} setHashtag={setHashtag} publicacion={publicacion} setPublicacion={setPublicacion} />
        )
      }

      <button
        className="w-full bg-gradient-primary py-2"
        type="button"
        onClick={create}
      >
        Crear
      </button>
    </div>
  );
};

export default Crear;
