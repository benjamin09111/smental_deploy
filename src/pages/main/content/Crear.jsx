import React, { useState } from "react";
import Usuario from "./crear/Usuario";

const Crear = () => {

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState("");
  
  const [publicacion, setPublicacion] = useState({
    titulo: "",
    descripcion: "",
    fecha: "",
    autor_id: localStorage.getItem("id"),
    imagen: "",
    nombre: localStorage.getItem("nombre")
  });

  const [hashtag, setHashtag] = useState("");

  const create = async () => {
    setLoading(true);
    if(publicacion.titulo === "" || publicacion.descripcion === ""){
      setMessage("Todos los campos son obligatorios.");
      return;
    }
    // obtener la fecha
    const today = new Date();
    const nuevaPublicacion = {
      ...publicacion,
      fecha: `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`,
      tematica: hashtag
    };

    try {
      console.log(nuevaPublicacion);
      const response = await fetch('http://localhost:3000/create_publication', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevaPublicacion)
      });

      if (response.ok) {
        const result = await response.json();
        setMessage("Publicación creada.");
        setLoading(false);
      } else {
        setMessage("Error al crear publicación.");
        setLoading(false);
        console.error('Error al crear la publicación:', response.statusText);
      }
    } catch (error) {
      setLoading(false);
      setMessage("Error al crear publicación.");
      console.error('Error al crear la publicación:', error);
    }
  };

  return (
    <div className="flex items-start w-full">
      <section className='flex flex-col lg:pl-12 lg:w-2/3 px-4 lg:px-0 pt-6'>
        <Usuario hashtag={hashtag} setHashtag={setHashtag} publicacion={publicacion} setPublicacion={setPublicacion} />
        <div className={message === "Publicación creada." ? `text-blue-500 mb-4` : `text-red-500 mb-4`}>{message}</div>
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
