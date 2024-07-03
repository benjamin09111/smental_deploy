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
      const response = await fetch('https://smental-backend.onrender.com/create_publication', {
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
    <div className="flex items-start lg:pl-28">
      <section className='flex flex-col lg:w-2/3 px-4 lg:px-0 pt-6'>
        <Usuario hashtag={hashtag} setHashtag={setHashtag} publicacion={publicacion} setPublicacion={setPublicacion} />
        <div className={message === "Publicación creada." ? `text-secondary-custom mb-4 text-xl` : `text-red-500 mb-4 text-xl`}>{message}</div>
        <button
          className="lg:w-1/3 text-2xl bg-third-custom py-2"
          type="button"
          onClick={create}
        >
          Crear
        </button>
        <p className="text-black mt-2 text-lg">Al crear una publicación, no es posible borrarla aún.</p>
      </section>
    </div>
  );
};

export default Crear;
